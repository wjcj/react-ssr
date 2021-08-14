import React from 'react';
import Helmet from 'react-helmet';

const About = () => {
  return (
    <div className="about">
      <Helmet>
        <title>About</title>
        <meta name="description" content="react ssr demo: user" />
      </Helmet>
      <h1>About</h1>
      <p>顾名思义，服务端渲染就是在浏览器请求页面URL的时候，服务端将我们需要的HTML文本组装好，并返回给浏览器，这个HTML文本被浏览器解析之后，不需要经过JavaScript 脚本的执行，即可直接构建出希望的DOM 树并展示到页面中。 这个服务端组装HTML的过程，叫做服务端渲染。</p>
    </div>
  );
}

export default About;
