# Parserhat

Bu proje, CSS değişkenlerini Json formatında yönetebilmeyi sağlamaktadır.

## Başlarken

NPM aracılığıyla indirmek için aşağıdaki komutu kullanabilirsiniz.

```
  npm i parserhat
```

# Kullanmaya başlamak için

Parserhat ile değişkenleri yönetirken Json dosyanızı import edebilir yada Json kodlarınızı parametre olarak geçebilirsiniz.

```javascript
// Parserhat javascript dosyasını import etmek için
import Parser from "parserhat";
```

Parserhat'i projenize dahil ettikten sonra Json dosyanızı Parserhat'e tanımlayarak değişkenlerin root altına taşınmasını sağlayabilirsiniz.

```javascript
/* 
 Örnek olarak verilen kodda variables isimli bir json dosyası
 direkt olarak import edilerek parserhat'e tanımlanmıştır.
 */

parser.attacheToJson(variables);
```

Yukarıdaki örnekte olduğu üzere dosyayı import edebilir yada aşağıdaki gibi kodları direkt olarak Parserhat'e tanımlayabilirsiniz.

```javascript
const variables = {
  text: {
    color: {
      primary: "#ffffff",
      secondary: "#e5e5e5",
      tertiary: "#080710",
    },
    font: {
      family: {
        primary: "Poppins",
        secondary: "sans-serif",
      },
      size: {
        primary: 14,
        secondary: 12,
      },
    },
  },
  common: {
    color: {
      primary: "#ffffff",
      secondary: "#e5e5e5",
      tertiary: "#080710",
    },
  },
};

parser.attacheToJson(variables);
```

## Değişkenleri kullanırken

Tanımladığınız Json dosyasında yer alan key ve value değerleri korunarak değişken isimlendirmesi otomatik olarak yapılır ve root altına yerleştirilir.

İç içe tanımlama konusunda bir sınır yoktur. Değişken isimleri key'ler arasında - işareti olacak şekilde çıkacaktır. Örneğin common altında yer alan color altındaki primary değişkenini kullanırken --common-color-primary şeklinde bir isimlendirme ile çıkacaktır.

```CSS
button {
  width: 100%;
  background-color: var(--common-color-primary);
  color: var(--text-color-tertiary);
  font-size: var(--text-font-size-primary)
}
```
