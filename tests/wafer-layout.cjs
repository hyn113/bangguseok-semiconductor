const assert=require('node:assert/strict');const fs=require('node:fs');const css=fs.readFileSync('src/wafer.css','utf8');const source=fs.readFileSync('src/WaferLesson.tsx','utf8');
assert.match(css,/\.wafer-stage-viewport\{[^}]*height:clamp\(280px,56dvh,540px\)/);
assert.match(css,/\.wafer-step-complete\{[^}]*top:50%[^}]*max-height:calc\(100% - 20px\)[^}]*display:flex/);
assert.match(css,/\.completion-copy\{[^}]*min-height:0;overflow:auto/);
assert.match(css,/\.wafer-step-complete>\.orange\{[^}]*min-height:44px;flex-shrink:0/);
assert.match(css,/@media\(max-height:600px\)/);assert.match(css,/@media\(max-width:650px\)\{\.stage-instructions/);
assert.match(source,/active&&done&&<div ref=\{completion\}/);assert.match(source,/setStage\(Math.min\(8,stage\+1\)\)/);
console.log('PASS wafer layout source guards: viewport-bounded center, short-height/mobile rules, scrolling copy with retained Next action. Browser geometry not asserted.');
