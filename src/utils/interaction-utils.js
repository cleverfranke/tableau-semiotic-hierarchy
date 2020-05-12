// Copyright (c) 2019 Chris DeMartini
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

const tableauExt = window.tableau.extensions;

export function getConfigFieldInternalName(fieldName, tableauSettings) {
  return tableauSettings.ConfigParentField === fieldName 
    ? 'name'
    : tableauSettings.ConfigChildField === fieldName
      ? 'child'
      : tableauSettings.ConfigLabelField === fieldName
        ? 'label'
        : tableauSettings.ConfigColorField === fieldName
          ? 'colorHex'
          : tableauSettings.ConfigValueField === fieldName
            ? 'valueMetric'
            : fieldName;
}

export function selectMarksByField(fieldName, fieldValues, ConfigSheet) {
  const marksValue = [{
    fieldName,
    value: fieldValues
  }];

  // Empty promise that resolves when the selection is complete.
  return tableauExt.dashboardContent.dashboard.worksheets
    // .filter(ws => ws.name !== ConfigSheet)
    .map(worksheet => worksheet
      .selectMarksByValueAsync(
        marksValue,
        window.tableau.SelectionUpdateType.Replace
      )
    );
}

export function clearMarksByField(fieldName) {
  const marksValue = [{
    fieldName,
    value: []
  }];

  return tableauExt.dashboardContent.dashboard.worksheets
  .map(worksheet => worksheet
    .selectMarksByValueAsync(
      marksValue,
      window.tableau.SelectionUpdateType.Replace
    )
  );
}

export function applyFilterByField(fieldName, fieldValues, ConfigSheet) {
  // Empty promise that resolves when the selection is complete.
  return tableauExt.dashboardContent.dashboard.worksheets
    .filter(ws => ws.name !== ConfigSheet)
    .forEach(worksheet => {
      worksheet
        .applyFilterAsync(
          fieldName,
          fieldValues,
          window.tableau.FilterUpdateType.Replace
        )
  });
}

export function clearFilterByField(fieldName, ConfigSheet) {
  // Empty promise that resolves when the selection is complete.
  return tableauExt.dashboardContent.dashboard.worksheets
    .filter(ws => ws.name !== ConfigSheet)
    .forEach(worksheet => {
      worksheet.clearFilterAsync(fieldName);
  });
}