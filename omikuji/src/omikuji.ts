// =============================================================
// データ層 (omikuji.ts)
// -------------------------------------------------------------
// おみくじの「型」と「箱（OmikujiBox クラス）」を定義する層です。
// 小まとめ (wrap_up) で作成した CLI 版のコードを、ほぼそのまま再利用しています。
//
// この層は「データとロジック」だけに専念し、画面表示(DOM操作)は一切しません。
// → 画面に出す仕事は render.ts（描画層）、ボタン操作との配線は main.ts（イベント層）が担当します。
//
// ★この omikuji.ts は配布時点で完成しています。まずは中身を「読んで理解」しましょう。
// =============================================================

// おみくじの結果を表す型（Union Type）。
// この6つの文字列以外は使えないので、打ち間違い（例: "第吉"）を防げます。
export type OmikujiResult = "大吉" | "中吉" | "小吉" | "吉" | "末吉" | "凶";

// 各結果を「何枚」箱に入れるかの比率。Record<キーの型, 値の型> で表現します。
// 数値は自由に変えてよいです（大吉を増やすと当たりやすくなります）。
export const omikujiRatios: Record<OmikujiResult, number> = {
  大吉: 5,
  中吉: 15,
  小吉: 20,
  吉: 30,
  末吉: 20,
  凶: 10,
};

// おみくじ箱クラス。
// 「中身のくじ(tickets)」というデータと、「リセット」「引く」という機能をひとまとめにしています。
export class OmikujiBox {
  // private: この箱の中だけで使うデータ。外部(main.ts など)から直接触らせません。
  private tickets: OmikujiResult[] = [];

  // インスタンス作成時(new された時)に1度だけ実行され、箱を初期化します。
  constructor() {
    this.reset();
  }

  // 箱の中身を、omikujiRatios で決めた比率どおりに入れ直します。
  public reset(): void {
    this.tickets = [];

    for (const [result, count] of Object.entries(omikujiRatios)) {
      for (let i = 0; i < count; i++) {
        // Object.entries だとキーが string 扱いになるので as で元の型に戻します。
        this.tickets.push(result as OmikujiResult);
      }
    }

    console.log(`おみくじ箱をリセットしました。（合計 ${this.tickets.length} 枚）`);
  }

  // 箱からランダムに1枚引いて、その結果を返します。
  // 箱が空のときは引けないので null を返します。
  public draw(): OmikujiResult | null {
    if (this.tickets.length === 0) {
      console.log("もうおみくじは空っぽです！リセットしてください。");
      return null;
    }

    const randomIdx = Math.floor(Math.random() * this.tickets.length);
    // splice(開始位置, 個数) は抜き出した要素の配列を返すので、その 0 番目を取り出します。
    const drawnTicket = this.tickets.splice(randomIdx, 1)[0];
    return drawnTicket;
  }

  // ============================================================
  // ★拡張ポイント（データ層）：ベースでは未実装。必要になったら足してみよう。
  // ------------------------------------------------------------
  // ・残りくじ枚数を画面に出したい
  //     → 「箱の残り枚数」を外から読めるメソッドを足す（private は保ったまま）。
  //        例:
  //        public remaining(): number {
  //          return this.tickets.length;
  //        }
  //
  // ・大吉が残り何枚か、のように種類ごとの残数を出したい
  //     → for...of で数えて返すメソッドを足す。
  //        例:
  //        public countOf(result: OmikujiResult): number {
  //          let count = 0;
  //          for (const ticket of this.tickets) {
  //            if (ticket === result) count++;
  //          }
  //          return count;
  //        }
  //
  // ・比率を画面から変更できるようにしたい（比率編集UI）
  //     → reset が比率(ratios)を引数で受け取れるように改修する。
  //
  // ・おみくじの種類を増やしたい（例: 半吉）
  //     → OmikujiResult 型に "半吉" を足し、omikujiRatios にも "半吉: 10" を足す。
  // ============================================================
}
