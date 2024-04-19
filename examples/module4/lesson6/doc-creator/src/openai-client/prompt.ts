export const createPrompt = (filePath: string, fileContent: string) => `
    I need to generate simple and concise documentation for the following file enclosed with <FILE_CONTENT></FILE_CONTENT> tags.

    <FILE_CONTENT>
    ${fileContent}
    </FILE_CONTENT>

    The file is available under the path: ${filePath}

    Create documentation in a markdown format - follow the template below:

    1. File path <PATH>
    2. Type: CODE | TESTS | CONFIG | DOCS | OTHER
    3. Purpose: <PURPOSE>
    4. Content: <CONTENT>
    5. Tech stack (if applicable): <TECH_STACK>

  `;
