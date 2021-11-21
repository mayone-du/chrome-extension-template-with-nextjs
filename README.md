# Chrome Extension Template with Next.js

## Note

```
npm run export
```

で/extensions/dist に出力される

chrome.tabs...のような chromeAPI を使用したい場合は、dynamic import で SSR を false にしないといけない。

/src/scripts 以下のファイルは、依存関係の解決ができなくなるため絶対パスではなく相対パスで指定する。

### WASM の build

/wasm に移動し、

```
wasm-pack build
```

を実行してビルドする。/wasm/pkg に ts ファイルが出力されるため、それを import している

## TODO

- 確認するたびにビルド（npm run export）しないといけなくて、開発効率が悪い
- 1 度 chrome.storage.local から get すると値が null 担ってしまう

## 機能

- 今月の平均稼働時間が見れる
- 今月あとどのくらい平均で働けばよいか見れる
