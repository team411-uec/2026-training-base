// 描画層 (render.ts)
// 状態を受け取って画面(DOM)に表示するだけを担当する。
// 塗るロジックは canvas.ts、クリックとの配線は main.ts が持つ。

import { GRID_SIZE } from "./canvas";

// マス目（セル）を画面に並べて作る（完成済み）。
// GRID_SIZE×GRID_SIZE の数だけ <div> を作り、#canvas に追加する。
// 各セルには class="pixel-cell"（まとめて扱うため）と id="cell-0"…（1マスずつ狙うため）を付ける。
export const renderGrid = (): void => {
  const container = document.getElementById("canvas");
  if (container === null) return;

  // 念のため、すでにあるマスを消してから作り直す。
  container.textContent = "";

  const total = GRID_SIZE * GRID_SIZE;
  for (let index = 0; index < total; index++) {
    const cell = document.createElement("div");
    cell.className = "pixel-cell";
    cell.id = `cell-${index}`;
    container.appendChild(cell);
  }
};

// ステップ1（最初の課題）: この関数を実装する。
//
// いまはマスをクリックすると Console に「塗ったマス: 5」と出るが、色は変わらない。
// この関数の中身が空だからで、ここに DOM 操作を書けばマスが塗られる。
//
// ヒント:
//  - 色を変えたいマスは id="cell-${index}" の要素。getElementById で取れる。
//  - 要素の背景色は style.backgroundColor で変えられる。
export const renderCell = (index: number, color: string): void => {
  // TODO（ステップ1）: ここに DOM 操作を書いて、マスの色を変える。
};

// 拡張ポイント（ステップ2以降）。必要になったら関数を足す。
//  - カラーパレットの色見本を並べる: 色ボタンを createElement で作って表示する関数を足す。
//  - アニメのフレーム一覧を表示する: フレームのサムネイルを並べる関数を足す。
