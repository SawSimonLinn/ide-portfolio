'use server';

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import dedent from 'dedent';

const GenerateFilePreviewInputSchema = z.object({
  filePath: z.string().describe('The path of the file to preview.'),
  fileContent: z.string().describe('The content of the file to preview.'),
});

export type GenerateFilePreviewInput = z.infer<typeof GenerateFilePreviewInputSchema>;

const GenerateFilePreviewOutputSchema = z.object({
  title: z.string().describe('A short, catchy title for the file preview.'),
  description: z.string().describe('A one-sentence summary of the component or file.'),
  componentName: z.string().describe('The main React component name to render, if applicable. Otherwise, an empty string.'),
});

export type GenerateFilePreviewOutput = z.infer<typeof GenerateFilePreviewOutputSchema>;

export async function generateFilePreview(input: GenerateFilePreviewInput): Promise<GenerateFilePreviewOutput> {
  return generateFilePreviewFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateFilePreviewPrompt',
  input: { schema: GenerateFilePreviewInputSchema },
  output: { schema: GenerateFilePreviewOutputSchema },
  prompt: dedent`
    You are an expert at analyzing React component files and creating compelling summaries.
    Given the file path and content, generate a preview.

    File Path: {{{filePath}}}
    File Content:
    \`\`\`typescript
    {{{fileContent}}}
    \`\`\`

    Your task is to:
    1.  Create a short, catchy title for the file.
    2.  Write a one-sentence summary of what the component or file does.
    3.  Identify the main React component name to render. If it's not a React component file or you can't determine the main component, return an empty string for componentName.
  `,
});

const generateFilePreviewFlow = ai.defineFlow(
  {
    name: 'generateFilePreviewFlow',
    inputSchema: GenerateFilePreviewInputSchema,
    outputSchema: GenerateFilePreviewOutputSchema,
  },
  async input => {
    const { output } = await prompt(input);
    if (!output) {
      throw new Error('Failed to generate file preview output. The model did not return any output.');
    }
    return output;
  }
);
