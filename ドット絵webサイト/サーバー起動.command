#!/bin/bash
# ピクセル展示室 — サーバー起動（このファイルと同じフォルダを配信）

# .command があるフォルダへ（パス表記ゆれで「別フォルダを配信」しない）
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR" || exit 1

if [ ! -f index.html ]; then
  echo "エラー: このフォルダに index.html がありません。"
  echo "  いまの場所: $SCRIPT_DIR"
  echo "  この .command は「ドット絵webサイト」フォルダの中に置いてください。"
  read -r -p "Enter で終了"
  exit 1
fi

# 8080が使用中なら終了
EXISTING=$(lsof -nP -iTCP:8080 2>/dev/null | awk '/LISTEN/{print $2}')
if [ -n "$EXISTING" ]; then
  echo ">> ポート8080を解放中 (PID: $EXISTING)"
  kill "$EXISTING" 2>/dev/null
  sleep 0.6
fi

echo ">> 配信フォルダ: $SCRIPT_DIR"
echo ">> index の title 行:"
grep -m1 '<title>' index.html || true
echo ">> ブラウザはキャッシュ回避用の URL で開きます"
echo ">> まだ古いとき: Cmd+Shift+R またはシークレットウィンドウ"
echo ">> フッターに「© 2026 Cold Sleep」が出ていれば最新 HTML です"
echo ">> このウィンドウを閉じるとサーバーも停止します"
echo ""

CACHE_BUST="$(date +%s)"
(sleep 1.0 && open "http://127.0.0.1:8080/?nocache=${CACHE_BUST}") &

python3 -m http.server 8080 --bind 127.0.0.1
