function runCode() {
  var htmlCode = document.getElementById("html-editor").value;
  var cssCode = document.getElementById("css-editor").value;
  var jsCode = document.getElementById("js-editor").value;
  var outputFrame = document.getElementById("output-frame").contentWindow.document;
  
  outputFrame.open();
  outputFrame.write(htmlCode + "<style>" + cssCode + "</style><script>" + jsCode + "</script>");
  outputFrame.close();
}

function resetCode() {
  document.getElementById("html-editor").value = "";
  document.getElementById("css-editor").value = "";
  document.getElementById("js-editor").value = "";
  document.getElementById("output").contentWindow.document.open();
  document.getElementById("output").contentWindow.document.write("");
  document.getElementById("output").contentWindow.document.close();
}