// Swagger UI 5.33+ virtualizes the operations list once it passes 150 rows: only the
// rows near the viewport are in the DOM, so the browser's find-in-page can't see the
// rest of the commands. This plugin swaps the operations component back to the plain
// render (every tag and operation in the DOM up front, as before 5.33).
// Lives outside dist/ because the update workflow replaces dist/ on every release; the
// workflow re-adds it to index.html and swagger-initializer.js. The docs page on
// ispyconnect.com loads it from here too (Web\Pages\Docs.cshtml.cs).
window.NoVirtualOps = function (system) {
  var React = system.React;
  return {
    components: {
      operations: function (props) {
        var specSelectors = props.specSelectors, getComponent = props.getComponent;
        var taggedOps = specSelectors.taggedOperations();
        var methods = specSelectors.validOperationMethods();
        if (taggedOps.size === 0) return React.createElement("h3", null, " No operations defined in spec!");
        var OperationContainer = getComponent("OperationContainer", true);
        var OperationTag = getComponent("OperationTag");
        return React.createElement("div", null, taggedOps.map(function (tagObj, tag) {
          return React.createElement(OperationTag, {
              key: "operation-" + tag, tagObj: tagObj, tag: tag,
              oas3Selectors: props.oas3Selectors, layoutSelectors: props.layoutSelectors,
              layoutActions: props.layoutActions, getConfigs: props.getConfigs,
              getComponent: getComponent, specUrl: specSelectors.url()
            },
            React.createElement("div", { className: "operation-tag-content" }, tagObj.get("operations").map(function (op) {
              var path = op.get("path"), method = op.get("method");
              if (methods.indexOf(method) === -1) return null;
              return React.createElement(OperationContainer, { key: path + "-" + method, specPath: op.get("specPath"), op: op, path: path, method: method, tag: tag });
            }).toArray()));
        }).valueSeq().toArray());
      }
    }
  };
};
