import { Node, Project, SyntaxKind } from "ts-morph";

const removeFeatureName = process.argv[2];
const featureState = process.argv[3];

if (!removeFeatureName) {
  throw new Error("provide feature name");
}

if (!featureState) {
  throw new Error("provide feature state");
}

if (featureState !== "on" && featureState !== "off") {
  throw new Error("provide correct feature state (on/off)");
}

const project = new Project();
project.addSourceFilesAtPaths("./src/**/*.{ts,tsx}");

const sourceFiles = project.getSourceFiles("./src/**/*.{ts,tsx}");

const removeFuntionFeature = (node: Node) => {
  if (
    Node.isCallExpression(node) &&
    node.getFirstChildByKind(SyntaxKind.Identifier)?.getText() ===
      "toggleFeature"
  ) {
    const objectOptions = node.getFirstChildByKind(
      SyntaxKind.ObjectLiteralExpression,
    );

    if (!objectOptions) {
      return;
    }

    const featureName = objectOptions
      .getProperty("name")
      ?.getFirstChildByKind(SyntaxKind.StringLiteral)
      ?.getText()
      .slice(1, -1);

    const featureOnFn = objectOptions
      .getProperty("on")
      ?.getFirstChildByKind(SyntaxKind.ArrowFunction)
      ?.getBody();
    const featureOffFn = objectOptions
      .getProperty("off")
      ?.getFirstChildByKind(SyntaxKind.ArrowFunction)
      ?.getBody();

    if (!featureName || !featureOnFn || !featureOffFn) {
      return;
    }

    if (featureName !== removeFeatureName) {
      return;
    }

    if (featureState === "on") {
      node.replaceWithText(featureOnFn.getText());
    }

    if (featureState === "off") {
      node.replaceWithText(featureOffFn.getText());
    }
  }
};

const removeComponentFeature = (node: Node) => {
  if (
    Node.isJsxSelfClosingElement(node) &&
    node.getFirstChildByKind(SyntaxKind.Identifier)?.getText() ===
      "ToggleFeature"
  ) {
    const attributes = node.getDescendantsOfKind(SyntaxKind.JsxAttribute);

    const featureName = attributes
      .find(
        (attr) =>
          attr.getFirstChildByKind(SyntaxKind.Identifier)?.getText() === "name",
      )
      ?.getFirstChildByKind(SyntaxKind.StringLiteral)
      ?.getText()
      .slice(1, -1);

    const featureOnComponent = attributes
      .find(
        (attr) =>
          attr.getFirstChildByKind(SyntaxKind.Identifier)?.getText() === "on",
      )
      ?.getFirstChildByKind(SyntaxKind.JsxExpression)
      ?.getText()
      .slice(1, -1);

    const featureOffComponent = attributes
      .find(
        (attr) =>
          attr.getFirstChildByKind(SyntaxKind.Identifier)?.getText() === "off",
      )
      ?.getFirstChildByKind(SyntaxKind.JsxExpression)
      ?.getText()
      .slice(1, -1);

    if (!featureName || !featureOnComponent || !featureOffComponent) {
      return;
    }

    if (featureName !== removeFeatureName) {
      return;
    }

    if (featureState === "on") {
      node.replaceWithText(featureOnComponent);
    }

    if (featureState === "off") {
      node.replaceWithText(featureOffComponent);
    }
  }
};

sourceFiles.forEach((sourceFile) => {
  sourceFile.forEachDescendant((node) => {
    removeFuntionFeature(node);
    removeComponentFeature(node);
  });
});

project.saveSync();
