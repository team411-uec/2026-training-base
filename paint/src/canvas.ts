// データ層 (canvas.ts)
// ドット絵キャンバスのデータと操作関数を定義する層。
// どのマスが何色かという情報とその操作だけに専念し、画面表示(DOM操作)はしない。
// この層は完成済み。まずは読んで理解する。

// マス目の一辺の数（16 なら 16×16 = 256 マス）。
export const GRID_SIZE = 16;

// 塗るときの色と、空（消えている）マスの色。
export const DEFAULT_COLOR = "#000000"; // 黒
export const EMPTY_COLOR = "#ffffff"; // 白

// 各マスの色を1次元配列で持つ（長さは GRID_SIZE×GRID_SIZE）。
// export していないので外部からは直接触れず、下の関数を通して操作する。
let cells: string[] = [];

// 全マスを空(白)に戻す。
export const clearCanvas = (): void => {
  cells = [];
  for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
    cells.push(EMPTY_COLOR);
  }
  console.log("キャンバスを全消去しました");
};

// index 番目のマスを color で塗る。
export const paintCell = (index: number, color: string): void => {
  cells[index] = color;
};

// index 番目のマスの色を返す。
export const getCellColor = (index: number): string => {
  return cells[index];
};

// 拡張ポイント（ステップ2以降）。必要になったら足す。
//  - 消しゴム: paintCell(index, EMPTY_COLOR) で白に戻せる（新しい関数は不要）。
//  - バケツ塗り: クリックしたマスとつながった同色のマスを塗り替える。上下左右の index は
//    index±1 / index±GRID_SIZE で計算でき、getCellColor で隣の色を調べられる。
//  - Undo / Redo: 塗った変更（どのマスを何色から何色に）を配列に記録し、逆順に戻す。
//  - アニメーション: cells のコピーをフレーム配列に貯めて順に表示する。
//  - 保存・再現: cells を文字列にして保存し、読み込み時に元に戻す。
