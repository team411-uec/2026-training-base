// データ層 (omikuji.ts)
// おみくじの型と、くじの箱（データと操作関数）を定義する層。
// データとロジックだけに専念し、画面表示(DOM操作)はしない。
// CLI 版のコードをほぼそのまま再利用している。この層は完成済み。まずは読んで理解する。

// おみくじの結果を表す型（Union Type）。
// この6つの文字列以外は使えないので、打ち間違い（例: "第吉"）を防げる。
export type OmikujiResult = "大吉" | "中吉" | "小吉" | "吉" | "末吉" | "凶";

// 各結果を何枚ずつ箱に入れるかの比率。数値は自由に変えてよい。
export const omikujiRatios: Record<OmikujiResult, number> = {
  大吉: 5,
  中吉: 15,
  小吉: 20,
  吉: 30,
  末吉: 20,
  凶: 10,
};

// 箱の中身（引けるくじ）。このファイルの中だけで使う。
// export していないので外部からは直接触れず、下の関数を通して操作する。
let tickets: OmikujiResult[] = [];

// 箱の中身を omikujiRatios の比率どおりに入れ直す。
export const resetOmikuji = (): void => {
  tickets = [];

  for (const [result, count] of Object.entries(omikujiRatios)) {
    for (let i = 0; i < count; i++) {
      // Object.entries だとキーが string 扱いになるので as で元の型に戻す。
      tickets.push(result as OmikujiResult);
    }
  }

  console.log(`おみくじ箱をリセットしました。（合計 ${tickets.length} 枚）`);
};

// 箱からランダムに1枚引いて返す。空のときは null を返す。
export const drawOmikuji = (): OmikujiResult | null => {
  if (tickets.length === 0) {
    console.log("もうおみくじは空っぽです！リセットしてください。");
    return null;
  }

  const randomIdx = Math.floor(Math.random() * tickets.length);
  // splice は抜き出した要素の配列を返すので、その 0 番目を取り出す。
  const drawnTicket = tickets.splice(randomIdx, 1)[0];
  return drawnTicket;
};

// 拡張ポイント（ステップ2以降）。必要になったら足す。
//  - 残りくじ枚数を出す: tickets.length を返す関数をこのファイルに足す（tickets は外から読めない）。
//  - 種類ごとの残数を出す: 指定した結果の枚数を数えて返す関数を足す。
//  - 比率を画面から変える: resetOmikuji が比率を引数で受け取れるように改修する。
//  - 種類を増やす（例: 半吉）: OmikujiResult 型と omikujiRatios の両方に足す。
