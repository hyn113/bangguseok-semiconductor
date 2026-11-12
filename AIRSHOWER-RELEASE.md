# Air shower integration (2026-11-12)

Preserves v21 source and learning modules. Adds `/airshower-preview.html` and new-tab links from the entry-choice screen and practice menu. Existing unsaved notes remain in their original tab.

Recovered original compiled preview from user-attached `airshower-quality-preview.tar(1).gz`, SHA256 e00cfa6c2aa5761039201c33c302299a62367ba824ce3c0c9b3c6d207ef70670. Its JS/CSS and HDR are preserved byte-for-byte. The standalone HTML adds a home link. This archive is not the Blender or photorealistic gowning source; those are not included or claimed completed.

Features in recovered bundle: Three.js room, 360 view/navigation, broad wind particles, synthesized Web Audio wind sound, sound/volume controls, tab-visibility shutdown, WebGL fallback. Sound is not an equipment recording and airflow is conceptual visualization, not CFD or validated field training.

Assets: Poly Haven Studio Small 04 by Greg Zaal, CC0; attribution in public/airshower-assets/ASSET-LICENSES.txt. HDR MD5 4d58f1d1b8f919f2bb4de1b748d11270 verified. No new remote runtime asset requests required.

QA: TypeScript/Vite production build; JS syntax; DOM mounting/fallback and control/asset checks. GPU-rendered appearance and audible sound quality cannot be verified in headless DOM. Prior user Mac preview approval is not a new GPU regression test.

## v23 control-bar correction
The general `.asp-layout button` rule overrode navigation sizing, causing tall orange buttons and a wrapped reset label. Scoped overrides now reserve a 64px strip below the canvas (112px on <=380px screens), with 44px directional buttons, a non-wrapping reset label, and visible keyboard focus. Renderer resizes to the reduced scene parent, preserving camera aspect. CSS URL versioned to avoid old cached stylesheet. No JS, wind, sound or geometry changes. Build, preview DOM and source-level CSS guards verified; browser/GPU geometry not asserted.
