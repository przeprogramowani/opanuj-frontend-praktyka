export const createPrompt = (filePath: string, fileContent: string) => `
    I need to generate simple and concise documentation for the following file enclosed with <FILE_CONTENT></FILE_CONTENT> tags.

    <FILE_CONTENT>
    ${fileContent}
    </FILE_CONTENT>

    The file is available under the path: ${filePath}

    Create documentation in a markdown format - follow the template below:

    # <FILE_NAME>
    File path <PATH>

    ## Type
    Enum: CODE | TESTS | CONFIG | DOCS | OTHER

    ## Purpose
    <PURPOSE>

    ## File content
    <FILE_CONTENT>

    ## Tech stack (if applicable)
    <TECH_STACK>
  `;
