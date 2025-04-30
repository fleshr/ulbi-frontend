import avatar from "@/shared/assets/tests/avatar.jpg";
import img from "@/shared/assets/tests/img.jpg";
import { ArticleBlock } from "../constants/articleBlock";
import { ArticleType } from "../constants/articleType";
import type { Article } from "../model/types/article";
import type {
  ArticleCodeBlock,
  ArticleImageBlock,
  ArticleTextBlock,
} from "../model/types/articleBlock";

export const mockArticle: Article = {
  id: "1",
  title: "Javascript news",
  subtitle: "Что нового в JS за 2022 год?",
  img: img,
  views: 1022,
  createdAt: "26.02.2022",
  type: [ArticleType.IT],
  user: {
    id: "1",
    username: "admin",
    avatar,
  },
  blocks: [
    {
      id: "1",
      type: ArticleBlock.TEXT,
      title: "Заголовок этого блока",
      paragraphs: [
        "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
        "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
        "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:",
      ],
    },
    {
      id: "2",
      type: ArticleBlock.CODE,
      code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
    },
    {
      id: "3",
      type: ArticleBlock.IMAGE,
      src: img,
      title: "Рисунок 1 - скриншот сайта",
    },
  ],
};

export const mockArticleBlockText = mockArticle.blocks[0] as ArticleTextBlock;
export const mockArticleBlockCode = mockArticle.blocks[1] as ArticleCodeBlock;
export const mockArticleBlockImage = mockArticle.blocks[2] as ArticleImageBlock;

export const mockArticles: Article[] = new Array(9)
  .fill(0)
  .map((_item, index) => ({
    ...mockArticle,
    id: String(index),
  }));
