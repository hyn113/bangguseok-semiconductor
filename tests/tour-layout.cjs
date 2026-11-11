// Source-level layout guards. These do not replace real browser viewport QA.
const fs=require('fs'),assert=require('node:assert/strict'),postcss=require('postcss');
const css=postcss.parse(fs.readFileSync('src/welcome.css','utf8'));
const declarations=(selector)=>{const result={};css.walkRules(r=>{if(r.selector===selector&&r.parent.type==='root')r.walkDecls(d=>{result[d.prop]=d.value})});return result};
const tour=declarations('.entry-tour');assert.equal(tour.height,'100dvh');assert.equal(tour['min-height'],'0');assert.equal(tour['overflow-y'],'auto');assert.equal(tour['overflow-x'],'hidden');assert.equal(tour.display,'flex');
const scene=declarations('.entry-tour>.entry-world,.entry-tour>.entry-vignette');assert.equal(scene.position,'fixed');assert.equal(scene.height,'100dvh');
const nav=declarations('.entry-tour .tour-top');assert.equal(nav['flex-wrap'],'wrap');assert.equal(declarations('.entry-tour>.tour-chrome').position,'sticky');
const card=declarations('.entry-tour>.tour-card');assert.match(card.width,/100% - 32px/);assert.equal(card['overflow-wrap'],'anywhere');
const footer=declarations('.entry-tour>.entry-footer');assert.match(footer.padding,/safe-area-inset-bottom/);
assert.ok(css.nodes.some(n=>n.type==='atrule'&&n.params==='(max-height:600px)'));
console.log('PASS tour layout source guards: viewport-height scrolling, viewport-fitted background, wrapping/sticky navigation, bounded card, safe-area footer and short-height rules. Browser dimensions not asserted.');

assert.deepEqual(declarations('.entry-choice'),{});assert.match(declarations('.entry-choice-card').width,/760px/);css.walkRules(r=>assert.ok(!r.selector.split(',').some(s=>s.trim()==='.entry-choice'),'Screen must not receive card dimensions'));console.log('PASS choice screen/card class separation: no card dimensions on the full-page screen.');
