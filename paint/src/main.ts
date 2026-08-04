// イベント層 (main.ts)
// クリックと処理を結びつける配線を担当する。
// キャンバスを用意してマス目を描き、マスのクリックと全消去ボタンに処理を結びつける。
// この層は完成済み（ステップ1で render.ts を実装すれば動く）。

import { clearCanvas, paintCell, getCellColor, GRID_SIZE, DEFAULT_COLOR } from "./canvas";
import { renderGrid, renderCell } from "./render";

const main = (): void => {
  // キャンバスを用意する（1回呼ぶと、全マスが白になる）。
  clearCanvas();

  // マス目を画面に並べる。
  renderGrid();

  // 各マスを id（cell-0, cell-1…）で取得して、クリック時の処理を結びつける。
  // index が「何番目のマスか」なので、そのまま処理の中で使える。
  for (let index = 0; index < GRID_SIZE * GRID_SIZE; index++) {
    const cell = document.getElementById(`cell-${index}`);
    cell?.addEventListener("click", () => {
      // データを更新する（このマスを黒で塗る）。
      paintCell(index, DEFAULT_COLOR);

      // ステップ0 ではこの console.log だけが動く（Console に座標が出る）。
      console.log("塗ったマス:", index);

      // render.ts の renderCell を実装すると、ここでマスが塗られる（ステップ1）。
      renderCell(index, DEFAULT_COLOR);
    });
  }

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
