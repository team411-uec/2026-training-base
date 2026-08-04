// =============================================================
// イベント層 (main.ts)
// -------------------------------------------------------------
// アプリ全体の「配線」をする層です。
//   ・キャンバスを用意する（canvas.ts の clearCanvas() を1回呼んで、全マスを白にする）
//   ・マス目を描く（renderGrid を呼ぶ）
//   ・「マスがクリックされたら何をするか」「全消去ボタンが押されたら何をするか」を
//     addEventListener で結びつける
//
// ★この層は配布時点で完成しています（ステップ1で render.ts を実装すれば動きます）。
// =============================================================

import { clearCanvas, paintCell, getCellColor, GRID_SIZE, DEFAULT_COLOR } from "./canvas";
import { renderGrid, renderCell } from "./render";

const main = (): void => {
  // キャンバスを用意する（clearCanvas() を1回呼ぶと、全マスが白になります）。
  clearCanvas();

  // マス目を画面に並べる。
  renderGrid();

  // 並べたマスを全部取得して、1つずつ「クリックされたときの処理」を結びつける。
  const cells = document.querySelectorAll(".pixel-cell");
  for (const cell of cells) {
    cell.addEventListener("click", () => {
      // このマスが「何番目か」を data-index から取り出す（文字列なので数値に変換）。
      const index = Number((cell as HTMLElement).dataset.index);

      // データを更新する（このマスを黒で塗る）。
      paintCell(index, DEFAULT_COLOR);

      // ↓ ステップ0 では、この console.log だけが動きます（Console に座標が出る）。
      console.log("塗ったマス:", index);

      // ↓ renderCell の中身が空なので、今はまだ色が変わりません。
      //    render.ts の renderCell を実装すると、ここでマスが塗られるようになります（ステップ1）。
      renderCell(index, DEFAULT_COLOR);

      // ★拡張ポイント（イベント層）：
      //   パレットを作るなら、固定の DEFAULT_COLOR ではなく
      //   「今選んでいる色」を使うようにする。
    });
  }

  // 「全消去」ボタンが押されたときの処理。
  const clearButton = document.getElementById("clear-button");
  clearButton?.addEventListener("click", () => {
    clearCanvas();
    // 全マスを、データ上の色（全消去後なので白）で塗り直す。
    for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
      renderCell(i, getCellColor(i));
    }
  });
};

main();
