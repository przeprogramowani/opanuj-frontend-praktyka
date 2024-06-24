const getHtmlElements: () => { [key: string]: any } = () => {
  const htmlElementsIds: Array<string> = ['numberInput', 'numberValidateBtn', 'clearBtn', 'resultContainer'];
  const htmlElementsObject = {};

  htmlElementsIds.forEach(id => Object.assign(htmlElementsObject, { [id]: document.getElementById(id) }));

  return htmlElementsObject;
};

export const {
  numberInput,
  numberValidateBtn,
  clearBtn,
  resultContainer
} = getHtmlElements();
