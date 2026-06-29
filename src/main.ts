// =============================================================
// イベント層 (main.ts)
// -------------------------------------------------------------
// アプリ全体の「配線」をする層です。
//   ・画面の要素(ボタンなど)を取得する
//   ・おみくじ箱(OmikujiBox)を用意する
//   ・「ボタンが押されたら何をするか」を addEventListener で結びつける
//
// CLI 版では readline でキーボード入力を待つ while ループでしたが、
// GUI 版ではその役割を「ボタンのクリック」に置き換えています。
//   CLI: while で入力待ち → 文字を if で判定 → reset / draw を呼ぶ
//   GUI: ボタンを addEventListener で待つ → クリックされたら reset / draw を呼ぶ
//
// ★この層は配布時点で完成しています（ステップ1で render.ts を実装すれば動きます）。
// =============================================================

import { OmikujiBox } from "./omikuji";
import { renderResult } from "./render";

const main = (): void => {
  // おみくじ箱を1つ用意する（constructor の中で reset され、くじが入った状態になります）。
  const box = new OmikujiBox();

  // 画面のボタンを取得する。
  const drawButton = document.getElementById("draw-button");
  const resetButton = document.getElementById("reset-button");

  // 「引く」ボタンが押されたときの処理。
  drawButton?.addEventListener("click", () => {
    const result = box.draw();

    // ↓ ステップ0 では、この console.log だけが動きます（Console に結果が出る）。
    console.log("引いた結果:", result);

    // ↓ renderResult の中身が空なので、今はまだ画面が変わりません。
    //    render.ts の renderResult を実装すると、ここで画面に結果が出るようになります（ステップ1）。
    renderResult(result);

    // ★拡張ポイント（イベント層）：
    //   引いた結果を履歴に貯めたいときは、ここで配列に push して
    //   renderHistory(history) のような関数を呼ぶ。
  });

  // 「リセット」ボタンが押されたときの処理。
  resetButton?.addEventListener("click", () => {
    box.reset();
    // 表示を初期状態（結果なし）に戻す。null を渡しています。
    renderResult(null);
  });
};

main();
