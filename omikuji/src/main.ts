// イベント層 (main.ts)
// ボタンと処理を結びつける配線を担当する。
// おみくじ箱を用意し、ボタンのクリックで reset / draw を呼び、結果を描画層に渡す。
// この層は完成済み（ステップ1で render.ts を実装すれば動く）。

import { resetOmikuji, drawOmikuji } from "./omikuji";
import { renderResult } from "./render";

const main = (): void => {
  // おみくじ箱を用意する（1回呼ぶと、くじが入った状態になる）。
  resetOmikuji();

  const drawButton = document.getElementById("draw-button");
  const resetButton = document.getElementById("reset-button");

  drawButton?.addEventListener("click", () => {
    const result = drawOmikuji();

    // ステップ0 ではこの console.log だけが動く（Console に結果が出る）。
    console.log("引いた結果:", result);

    // render.ts の renderResult を実装すると、ここで画面に結果が出る（ステップ1）。
    renderResult(result);
  });

  resetButton?.addEventListener("click", () => {
    resetOmikuji();
    // 表示を初期状態（結果なし）に戻す。
    renderResult(null);
  });
};

main();
