var tagDoc  ="Esta línea debe ser la primera línea del archivo, sin espacios o líneas que la precedan. " +
			 "De esta forma, el modo estándar del navegador es activado y las incorporaciones de HTML5 " +
			 "son interpretadas siempre que sea posible,o ignoradas en caso contrario.";
var tagDocT ="&lt!DOCTYPE&gt";
var tagDocE ="&lt!DOCTYPE&gt";

var tagHtml  ="Este tag es el tag raiz de todo el archivo .html con este se inicia y se termina.<br>" + 
			  " En el ejemplo la palabra especial lang indica el idioma en el que se tiene la pagina" +
			  " en este caso es indica que la pagina sera en español." ;
var tagHtmlT ="&lthtml&gt";
var tagHtmlE =" &lt!DOCTYPE html&gt<br>" +
			  "<FONT COLOR=red><b>" +
			  " &nbsp&nbsp&lthtml lang=&quotes&quot&gt<br> " +
			  "<br>" +
			  " &nbsp&nbsp&lt/html&gt" +
			  "</FONT></b>;"

var tagHead  ="Despues del tag de raiz html se crear la cabecera del mismo con head.<br>" + 
			  " En este se identifica el titulo de la pagina, se ingresa información meta de la pagina," +
			  " se realizan los vinculos a archivos de css, javascript entre otros." ;
var tagHeadT ="&lthead&gt";
var tagHeadE =" &lt!DOCTYPE html&gt<br> " +
			  " &lthtml lang=&quotes&quot&gt<br> " +
			  "<FONT COLOR=red><b>" +
			  " &nbsp&nbsp&lthead&gt<br> " +
			  "<br>" +
			  " &nbsp&nbsp&lt/head&gt<br> " +
			  "</FONT></b>" +
			  " &lt/html&gt;"

var tagBody  ="Esta es la segunda sección del html; en esta se va a desarrollar absolutamente todo" + 
			  " lo que la pagina va a entragar al usuario final, es decir tiene todo lo que vamos a ver como usuarios finales.<br>" +
			  " En esta vamos se realiza la mayoria del trabajo al momento de crear una pagina o sitio WEB" ;
var tagBodyT ="&ltbody&gt";
var tagBodyE =" &lt!DOCTYPE html&gt<br> " +
			  " &lthtml lang=&quotes&quot&gt<br> " +
			  " &nbsp&nbsp&lthead&gt<br> " +
			  " &nbsp&nbsp&lt/head&gt<br> " +
			  "<FONT COLOR=red><b>" +
			  " &nbsp&nbsp&ltbody&gt<br> " +
			  "<br>" +	
			  " &nbsp&nbsp&lt/body&gt<br> " +
			  "</FONT></b>" +
			  " &lt/html&gt;"

var tagMeta  ="Esta etiqueta se incorpora en la etiqueta head; con esta se dan varias cosas.<br>"+
			  "La primera y algo muy bueno fue la definición del juego de caracteres, por otro lado" +
			  " con estas etiquetas se puede definir los datos propios de la página como son; el autor," +
			  " una descripción, palabras claves entre otras. Estas son muy importantes pues" +
			  " los buscadores las utilizan para realizar sus búsquedas de forma semántica."; 
			  
var tagMetaT ="&ltmeta&gt";
var tagMetaE =" &lt!DOCTYPE html&gt<br> " +
			  " &lthtml lang=&quotes&quot&gt<br> " +
			  " &nbsp&nbsp&lthead&gt<br> " +
			  "<FONT COLOR=red><b>" +
			  " &nbsp&nbsp&nbsp&nbsp&ltmeta&nbspcharset=&quotutf-8&quot&gt<br> " +
			  " &nbsp&nbsp&nbsp&nbsp&ltmeta&nbspname=&quotdescription&quot&nbspcontent=&quotDescripción&nbspde&nbspla&nbsppágina&quot&gt<br> " +
			  " &nbsp&nbsp&nbsp&nbsp&ltmeta&nbspname=&quotkeywords&quot&nbspcontent=&quotpalabra1,&nbspalabra2,&nbsppalabra3&quot&gt<br> " +
			  " &nbsp&nbsp&nbsp&nbsp&ltmeta&nbspname=&quotautor&quot&nbspcontent=&quotpepito&nbspperez&quot&gt<br> " +
			  "</FONT></b>" +
			  " &nbsp&nbsp&lt/head&gt<br> " +
			  " &nbsp&nbsp&ltbody&gt<br> " +
			  " &nbsp&nbsp&lt/body&gt<br> " +
			  " &lt/html&gt;"


var tagTitulo  ="Esta etiqueta se incorpora en la etiqueta head y contiene el título que se muestra en el navegador al momento de abrir la página WEB"; 
			  
var tagTituloT ="&lttitle&gt";
var tagTituloE =" &lt!DOCTYPE html&gt<br> " +
			  " &lthtml lang=&quotes&quot&gt<br> " +
			  " &nbsp&nbsp&lthead&gt<br> " +
			  " &nbsp&nbsp&nbsp&nbsp&ltmeta&nbspcharset=&quotutf-8&quot&gt<br> " +
			  " &nbsp&nbsp&nbsp&nbsp&ltmeta&nbspname=&quotdescription&quot&nbspcontent=&quotDescripción&nbspde&nbspla&nbsppágina&quot&gt<br> " +
			  " &nbsp&nbsp&nbsp&nbsp&ltmeta&nbspname=&quotkeywords&quot&nbspcontent=&quotpalabra1,&nbspalabra2,&nbsppalabra3&quot&gt<br> " +
			  " &nbsp&nbsp&nbsp&nbsp&ltmeta&nbspname=&quotautor&quot&nbspcontent=&quotpepito&nbspperez&quot&gt<br>" +
			  "<FONT COLOR=red><b>" +
			  " &nbsp&nbsp&nbsp&nbsp&lttitle&gtEste&nbspes&nbspel&nbsptitulo&nbspde&nbspla&nbsppágina&lt/title&gt<br>" +
			  "</FONT></b>" +
			  " &nbsp&nbsp&lt/head&gt<br> " +
			  " &nbsp&nbsp&ltbody&gt<br> " +
			  " &nbsp&nbsp&lt/body&gt<br> " +
			  " &lt/html&gt;"

var tagLink  ="Esta etiqueta se incorpora en la etiqueta head y nos permite vincular otros archivos a la página con el fin de utilizarlos en la creación de la misma. El uso más común es la vinculación de estilos (css), códigos javascript (js), imágenes, iconos entre otros."; 
			  
var tagLinkT ="&ltlink&gt";
var tagLinkE =" &lt!DOCTYPE html&gt<br> " +
			  " &lthtml lang=&quotes&quot&gt<br> " +
			  " &nbsp&nbsp&lthead&gt<br> " +
			  " &nbsp&nbsp&nbsp&nbsp&ltmeta&nbspcharset=&quotutf-8&quot&gt<br> " +
			  " &nbsp&nbsp&nbsp&nbsp&ltmeta&nbspname=&quotdescription&quot&nbspcontent=&quotDescripción&nbspde&nbspla&nbsppágina&quot&gt<br> " +
			  " &nbsp&nbsp&nbsp&nbsp&ltmeta&nbspname=&quotkeywords&quot&nbspcontent=&quotpalabra1,&nbspalabra2,&nbsppalabra3&quot&gt<br> " +
			  " &nbsp&nbsp&nbsp&nbsp&ltmeta&nbspname=&quotautor&quot&nbspcontent=&quotpepito&nbspperez&quot&gt<br>" +
			  " &nbsp&nbsp&nbsp&nbsp&lttitle&gtEste&nbspes&nbspel&nbsptitulo&nbspde&nbspla&nbsppágina&lt/title&gt<br>" +
			  "<FONT COLOR=red><b>" +
			  " &nbsp&nbsp&nbsp&nbsp&ltlink&nbsprel=&quotstylesheet&quot&nbsphref=&quotestilos.css&quot&gt<br>" +
			  "</FONT></b>" +
			  " &nbsp&nbsp&lt/head&gt<br> " +
			  " &nbsp&nbsp&ltbody&gt<br> " +
			  " &nbsp&nbsp&lt/body&gt<br> " +
			  " &lt/html&gt;"

var tagHeader  ="Esta etiqueta se incorpora en la etiqueta body, en esta etiqueta se presentara información pertinente para los títulos y cabeceras de la página. Tener en cuenta que esta información si la ve el usuario diferente a la de la etiqueta head."; 
var tagHeaderT ="&ltheader&gt";
var tagHeaderE =" &lt!DOCTYPE html&gt<br> " +
			  " &lthtml lang=&quotes&quot&gt<br> " +
			  " &nbsp&nbsp&lthead&gt<br> " +
			  " &nbsp&nbsp&nbsp&nbsp&ltmeta&nbspcharset=&quotutf-8&quot&gt<br> " +
			  " &nbsp&nbsp&nbsp&nbsp&ltmeta&nbspname=&quotdescription&quot&nbspcontent=&quotDescripción&nbspde&nbspla&nbsppágina&quot&gt<br> " +
			  " &nbsp&nbsp&nbsp&nbsp&ltmeta&nbspname=&quotkeywords&quot&nbspcontent=&quotpalabra1,&nbspalabra2,&nbsppalabra3&quot&gt<br> " +
			  " &nbsp&nbsp&nbsp&nbsp&ltmeta&nbspname=&quotautor&quot&nbspcontent=&quotpepito&nbspperez&quot&gt<br>" +
			  " &nbsp&nbsp&nbsp&nbsp&lttitle&gtEste&nbspes&nbspel&nbsptitulo&nbspde&nbspla&nbsppágina&lt/title&gt<br>" +
			  " &nbsp&nbsp&nbsp&nbsp&ltlink&nbsprel=&quotstylesheet&quot&nbsphref=&quotestilos.css&quot&gt<br>" +
			  " &nbsp&nbsp&lt/head&gt<br> " +
			  " &nbsp&nbsp&ltbody&gt<br> " +
			  "<FONT COLOR=red><b>" +
			  " &nbsp&nbsp&nbsp&nbsp&ltheader&gt<br> " +
			  "</FONT></b>" +
			  " &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&lth1&gtEste&nbspes&nbspel&nbsptitulo&nbspvisible&nbspde&nbspla&nbsppágina&lt/h1&gt<br>" +	
			  "<FONT COLOR=red><b>" +
			  " &nbsp&nbsp&nbsp&nbsp&lt/header&gt<br> " +
			  "</FONT></b>" +
			  " &nbsp&nbsp&lt/body&gt<br> " +
			  " &lt/html&gt;"

var tagNav  ="Esta etiqueta se incorpora en la etiqueta body, en esta etiqueta se presentara información pertinente a los menús que se quieran mostrar en la página WEB. Normalmente se realizan a través de ol, ul li."; 
var tagNavT ="&ltnav&gt";
var tagNavE =" &lt!DOCTYPE html&gt<br> " +
			  " &lthtml lang=&quotes&quot&gt<br> " +
			  " &nbsp&nbsp&lthead&gt<br> " +
			  " &nbsp&nbsp&nbsp&nbsp&ltmeta&nbspcharset=&quotutf-8&quot&gt<br> " +
			  " &nbsp&nbsp&nbsp&nbsp&ltmeta&nbspname=&quotdescription&quot&nbspcontent=&quotDescripción&nbspde&nbspla&nbsppágina&quot&gt<br> " +
			  " &nbsp&nbsp&nbsp&nbsp&ltmeta&nbspname=&quotkeywords&quot&nbspcontent=&quotpalabra1,&nbspalabra2,&nbsppalabra3&quot&gt<br> " +
			  " &nbsp&nbsp&nbsp&nbsp&ltmeta&nbspname=&quotautor&quot&nbspcontent=&quotpepito&nbspperez&quot&gt<br>" +
			  " &nbsp&nbsp&nbsp&nbsp&lttitle&gtEste&nbspes&nbspel&nbsptitulo&nbspde&nbspla&nbsppágina&lt/title&gt<br>" +
			  " &nbsp&nbsp&nbsp&nbsp&ltlink&nbsprel=&quotstylesheet&quot&nbsphref=&quotestilos.css&quot&gt<br>" +
			  " &nbsp&nbsp&lt/head&gt<br> " +
			  " &nbsp&nbsp&ltbody&gt<br> " +
			  " &nbsp&nbsp&nbsp&nbsp&ltheader&gt<br> " +
			  " &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&lth1&gtEste&nbspes&nbspel&nbsptitulo&nbspvisible&nbspde&nbspla&nbsppágina&lt/h1&gt<br>" +	
			  " &nbsp&nbsp&nbsp&nbsp&lt/header&gt<br> " +
			  "<FONT COLOR=red><b>" +
			  " &nbsp&nbsp&nbsp&nbsp&ltnav&gt<br> " +
			  "</FONT></b>" +
			  " &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&ltul&gt<br>" +	
			  " &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&ltli&gtMenu1&lt/li&gt<br>" +	
			  " &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&ltli&gtMenu2&lt/li&gt<br>" +			  
			  " &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&lt/ul&gt<br>" +		
			  "<FONT COLOR=red><b>" +
			  " &nbsp&nbsp&nbsp&nbsp&lt/nav&gt<br> " +
			  "</FONT></b>" +
			  " &nbsp&nbsp&lt/body&gt<br> " +
			  " &lt/html&gt;"

var tagSection  ="Esta etiqueta se incorpora en la etiqueta body, en esta etiqueta se presentara información pertinente al contenido real de la página, es decir la información álgida que se quiere comunicar con la página WEB."; 
var tagSectionT ="&ltsection&gt";
var tagSectionE =" &lt!DOCTYPE html&gt<br> " +
			  " &lthtml lang=&quotes&quot&gt<br> " +
			  " &nbsp&nbsp&lthead&gt<br> " +
			  " &nbsp&nbsp&nbsp&nbsp&ltmeta&nbspcharset=&quotutf-8&quot&gt<br> " +
			  " &nbsp&nbsp&nbsp&nbsp&ltmeta&nbspname=&quotdescription&quot&nbspcontent=&quotDescripción&nbspde&nbspla&nbsppágina&quot&gt<br> " +
			  " &nbsp&nbsp&nbsp&nbsp&ltmeta&nbspname=&quotkeywords&quot&nbspcontent=&quotpalabra1,&nbspalabra2,&nbsppalabra3&quot&gt<br> " +
			  " &nbsp&nbsp&nbsp&nbsp&ltmeta&nbspname=&quotautor&quot&nbspcontent=&quotpepito&nbspperez&quot&gt<br>" +
			  " &nbsp&nbsp&nbsp&nbsp&lttitle&gtEste&nbspes&nbspel&nbsptitulo&nbspde&nbspla&nbsppágina&lt/title&gt<br>" +
			  " &nbsp&nbsp&nbsp&nbsp&ltlink&nbsprel=&quotstylesheet&quot&nbsphref=&quotestilos.css&quot&gt<br>" +
			  " &nbsp&nbsp&lt/head&gt<br> " +
			  " &nbsp&nbsp&ltbody&gt<br> " +
			  " &nbsp&nbsp&nbsp&nbsp&ltheader&gt<br> " +
			  " &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&lth1&gtEste&nbspes&nbspel&nbsptitulo&nbspvisible&nbspde&nbspla&nbsppágina&lt/h1&gt<br>" +	
			  " &nbsp&nbsp&nbsp&nbsp&lt/header&gt<br> " +
			  " &nbsp&nbsp&nbsp&nbsp&ltnav&gt<br> " +
			  " &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&ltul&gt<br>" +	
			  " &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&ltli&gtMenu1&lt/li&gt<br>" +	
			  " &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&ltli&gtMenu2&lt/li&gt<br>" +			  
			  " &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&lt/ul&gt<br>" +	
			  " &nbsp&nbsp&nbsp&nbsp&lt/nav&gt<br> " +
			  "<FONT COLOR=red><b>" +
			  " &nbsp&nbsp&nbsp&nbsp&ltsection&gt<br> " +
			  "</FONT></b>" +
			  " &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&lth1&gtEste&nbspes&nbspel&nbspespacio&nbspde&nbspla&nbspsección&lt/h1&gt<br>" +	
			  "<FONT COLOR=red><b>" +
			  " &nbsp&nbsp&nbsp&nbsp&lt/section&gt<br> " +
			  "</FONT></b>" +
			  " &nbsp&nbsp&lt/body&gt<br> " +
			  " &lt/html&gt;"

var tagArticulo  ="Esta etiqueta se incorpora en la etiqueta section, se utiliza para organizar y estructurar de forma adecuada la información relevante de la página WEB."; 
var tagArticuloT ="&ltarticle&gt";
var tagArticuloE =" &lt!DOCTYPE html&gt<br> " +
			  " &lthtml lang=&quotes&quot&gt<br> " +
			  " &nbsp&nbsp&lthead&gt<br> " +
			  " &nbsp&nbsp&nbsp&nbsp&ltmeta&nbspcharset=&quotutf-8&quot&gt<br> " +
			  " &nbsp&nbsp&nbsp&nbsp&ltmeta&nbspname=&quotdescription&quot&nbspcontent=&quotDescripción&nbspde&nbspla&nbsppágina&quot&gt<br> " +
			  " &nbsp&nbsp&nbsp&nbsp&ltmeta&nbspname=&quotkeywords&quot&nbspcontent=&quotpalabra1,&nbspalabra2,&nbsppalabra3&quot&gt<br> " +
			  " &nbsp&nbsp&nbsp&nbsp&ltmeta&nbspname=&quotautor&quot&nbspcontent=&quotpepito&nbspperez&quot&gt<br>" +
			  " &nbsp&nbsp&nbsp&nbsp&lttitle&gtEste&nbspes&nbspel&nbsptitulo&nbspde&nbspla&nbsppágina&lt/title&gt<br>" +
			  " &nbsp&nbsp&nbsp&nbsp&ltlink&nbsprel=&quotstylesheet&quot&nbsphref=&quotestilos.css&quot&gt<br>" +
			  " &nbsp&nbsp&lt/head&gt<br> " +
			  " &nbsp&nbsp&ltbody&gt<br> " +
			  " &nbsp&nbsp&nbsp&nbsp&ltheader&gt<br> " +
			  " &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&lth1&gtEste&nbspes&nbspel&nbsptitulo&nbspvisible&nbspde&nbspla&nbsppágina&lt/h1&gt<br>" +	
			  " &nbsp&nbsp&nbsp&nbsp&lt/header&gt<br> " +
			  " &nbsp&nbsp&nbsp&nbsp&ltnav&gt<br> " +
			  " &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&ltul&gt<br>" +	
			  " &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&ltli&gtMenu1&lt/li&gt<br>" +	
			  " &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&ltli&gtMenu2&lt/li&gt<br>" +			  
			  " &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&lt/ul&gt<br>"  +
			  " &nbsp&nbsp&nbsp&nbsp&lt/nav&gt<br> " +			  
			  " &nbsp&nbsp&nbsp&nbsp&ltsection&gt<br> " +			  
			  "<FONT COLOR=red><b>" +
			  " &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&ltarticle&gt<br>" +	
			  "</FONT></b>" +
			  " &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&lth1&gtEste&nbspes&nbspel&nbspespacio&nbspde&nbspla&nbspinformación&lt/h1&gt<br>" +	
			  "<FONT COLOR=red><b>" +
			  " &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&lt/article&gt<br>" +	
			  "</FONT></b>" +
			  " &nbsp&nbsp&nbsp&nbsp&lt/section&gt<br> " +			  
			  " &nbsp&nbsp&lt/body&gt<br> " +
			  " &lt/html&gt;"

var tagAside  ="Esta etiqueta se incorpora en la etiqueta body, se utiliza para organizar y estructurar información que no es tan relevante para la página pero que es necesaria en la misma."; 
var tagAsideT ="&ltaside&gt";
var tagAsideE =" &lt!DOCTYPE html&gt<br> " +
			  " &lthtml lang=&quotes&quot&gt<br> " +
			  " &nbsp&nbsp&lthead&gt<br> " +
			  " &nbsp&nbsp&nbsp&nbsp&ltmeta&nbspcharset=&quotutf-8&quot&gt<br> " +
			  " &nbsp&nbsp&nbsp&nbsp&ltmeta&nbspname=&quotdescription&quot&nbspcontent=&quotDescripción&nbspde&nbspla&nbsppágina&quot&gt<br> " +
			  " &nbsp&nbsp&nbsp&nbsp&ltmeta&nbspname=&quotkeywords&quot&nbspcontent=&quotpalabra1,&nbspalabra2,&nbsppalabra3&quot&gt<br> " +
			  " &nbsp&nbsp&nbsp&nbsp&ltmeta&nbspname=&quotautor&quot&nbspcontent=&quotpepito&nbspperez&quot&gt<br>" +
			  " &nbsp&nbsp&nbsp&nbsp&lttitle&gtEste&nbspes&nbspel&nbsptitulo&nbspde&nbspla&nbsppágina&lt/title&gt<br>" +
			  " &nbsp&nbsp&nbsp&nbsp&ltlink&nbsprel=&quotstylesheet&quot&nbsphref=&quotestilos.css&quot&gt<br>" +
			  " &nbsp&nbsp&lt/head&gt<br> " +
			  " &nbsp&nbsp&ltbody&gt<br> " +
			  " &nbsp&nbsp&nbsp&nbsp&ltheader&gt<br> " +
			  " &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&lth1&gtEste&nbspes&nbspel&nbsptitulo&nbspvisible&nbspde&nbspla&nbsppágina&lt/h1&gt<br>" +	
			  " &nbsp&nbsp&nbsp&nbsp&lt/header&gt<br> " +
			  " &nbsp&nbsp&nbsp&nbsp&ltnav&gt<br> " +
			  " &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&ltul&gt<br>" +	
			  " &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&ltli&gtMenu1&lt/li&gt<br>" +	
			  " &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&ltli&gtMenu2&lt/li&gt<br>" +			  
			  " &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&lt/ul&gt<br>" +
			  " &nbsp&nbsp&nbsp&nbsp&lt/nav&gt<br> " +			  
			  " &nbsp&nbsp&nbsp&nbsp&ltsection&gt<br> " +			  
			  " &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&ltarticle&gt<br>" +	
			  " &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&lth1&gtEste&nbspes&nbspel&nbspespacio&nbspde&nbspla&nbspinformación&lt/h1&gt<br>" +	
			  " &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&lt/article&gt<br>" +	
			  " &nbsp&nbsp&nbsp&nbsp&lt/section&gt<br> " +			  
			  "<FONT COLOR=red><b>" +
			  " &nbsp&nbsp&nbsp&nbsp&ltaside&gt<br> " +
			  "</FONT></b>" +
			  " &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&lth1&gtEste&nbspes&nbspel&nbspespacio&nbspdel&nbspaside&lt/h1&gt<br>" +	
			  "<FONT COLOR=red><b>" +
			  " &nbsp&nbsp&nbsp&nbsp&lt/aside&gt<br> " +
			  "</FONT></b>" +
			  " &nbsp&nbsp&lt/body&gt<br> " +
			  " &lt/html&gt;"

var tagFooter  ="Esta etiqueta se incorpora en la etiqueta body, se utiliza para organizar y estructurar información que normalmente informa sobre autores, información comercial o de redes sociales entre otras. Este como su nombre lo indica va en la parte inferior de la página."; 
var tagFooterT ="&ltfooter&gt";
var tagFooterE =" &lt!DOCTYPE html&gt<br> " +
			  " &lthtml lang=&quotes&quot&gt<br> " +
			  " &nbsp&nbsp&lthead&gt<br> " +
			  " &nbsp&nbsp&nbsp&nbsp&ltmeta&nbspcharset=&quotutf-8&quot&gt<br> " +
			  " &nbsp&nbsp&nbsp&nbsp&ltmeta&nbspname=&quotdescription&quot&nbspcontent=&quotDescripción&nbspde&nbspla&nbsppágina&quot&gt<br> " +
			  " &nbsp&nbsp&nbsp&nbsp&ltmeta&nbspname=&quotkeywords&quot&nbspcontent=&quotpalabra1,&nbspalabra2,&nbsppalabra3&quot&gt<br> " +
			  " &nbsp&nbsp&nbsp&nbsp&ltmeta&nbspname=&quotautor&quot&nbspcontent=&quotpepito&nbspperez&quot&gt<br>" +
			  " &nbsp&nbsp&nbsp&nbsp&lttitle&gtEste&nbspes&nbspel&nbsptitulo&nbspde&nbspla&nbsppágina&lt/title&gt<br>" +
			  " &nbsp&nbsp&nbsp&nbsp&ltlink&nbsprel=&quotstylesheet&quot&nbsphref=&quotestilos.css&quot&gt<br>" +
			  " &nbsp&nbsp&lt/head&gt<br> " +
			  " &nbsp&nbsp&ltbody&gt<br> " +
			  " &nbsp&nbsp&nbsp&nbsp&ltheader&gt<br> " +
			  " &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&lth1&gtEste&nbspes&nbspel&nbsptitulo&nbspvisible&nbspde&nbspla&nbsppágina&lt/h1&gt<br>" +	
			  " &nbsp&nbsp&nbsp&nbsp&lt/header&gt<br> " +
			  " &nbsp&nbsp&nbsp&nbsp&ltnav&gt<br> " +
			  " &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&ltul&gt<br>" +	
			  " &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&ltli&gtMenu1&lt/li&gt<br>" +	
			  " &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&ltli&gtMenu2&lt/li&gt<br>" +			  
			  " &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&lt/ul&gt<br>" +
			  " &nbsp&nbsp&nbsp&nbsp&lt/nav&gt<br> " +			  
			  " &nbsp&nbsp&nbsp&nbsp&ltsection&gt<br> " +			  
			  " &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&ltarticle&gt<br>" +	
			  " &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&lth1&gtEste&nbspes&nbspel&nbspespacio&nbspde&nbspla&nbspinformación&lt/h1&gt<br>" +	
			  " &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&lt/article&gt<br>" +	
			  " &nbsp&nbsp&nbsp&nbsp&lt/section&gt<br> " +			  
			  " &nbsp&nbsp&nbsp&nbsp&ltaside&gt<br> " +
			  " &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&lth1&gtEste&nbspes&nbspel&nbspespacio&nbspdel&nbspaside&lt/h1&gt<br>" +	
			  " &nbsp&nbsp&nbsp&nbsp&lt/aside&gt<br> " +
			  "<FONT COLOR=red><b>" +
			  " &nbsp&nbsp&nbsp&nbsp&ltfooter&gt<br> " +
			  "</FONT></b>" +
			  " &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&lth1&gtEste&nbspes&nbspel&nbspespacio&nbspdel&nbspfooter&nbspo&nbsppie&lt/h1&gt<br>" +	
			  "<FONT COLOR=red><b>" +
			  " &nbsp&nbsp&nbsp&nbsp&lt/footer&gt<br> " +
			  "</FONT></b>" +
			  " &nbsp&nbsp&lt/body&gt<br> " +
			  " &lt/html&gt;"

var tagGen  ="En esta sección se encontraran las etquetas básicas del un html5 " 			 
var tagGenT ="";
var tagGenE ="";

var salida  ="";
var salidaT ="";
var salidaE ="";
function ActualizarTag(strId){
	if (strId == "tagDoc") {
		salida  = tagDoc;
		salidaT = tagDocT;
		salidaE = tagDocE;
	}
	if (strId == "tagHtml") {
		salida  = tagHtml;
		salidaT = tagHtmlT;
		salidaE = tagHtmlE;
	}
	if (strId == "tagHead") {
		salida  = tagHead;
		salidaT = tagHeadT;
		salidaE = tagHeadE;
	}
	if (strId == "tagBody") {
		salida  = tagBody;
		salidaT = tagBodyT;
		salidaE = tagBodyE;
	}
	if (strId == "tagMeta") {
		salida  = tagMeta;
		salidaT = tagMetaT;
		salidaE = tagMetaE;
	}
	if (strId == "tagTitulo") {
		salida  = tagTitulo;
		salidaT = tagTituloT;
		salidaE = tagTituloE;
	}
	if (strId == "tagLink") {
		salida  = tagLink;
		salidaT = tagLinkT;
		salidaE = tagLinkE;
	}
	if (strId == "tagHeader") {
		salida  = tagHeader;
		salidaT = tagHeaderT;
		salidaE = tagHeaderE;
	}
	if (strId == "tagNav") {
		salida  = tagNav;
		salidaT = tagNavT;
		salidaE = tagNavE;
	}
	if (strId == "tagSection") {
		salida  = tagSection;
		salidaT = tagSectionT;
		salidaE = tagSectionE;
	}
	if (strId == "tagArticulo") {
		salida  = tagArticulo;
		salidaT = tagArticuloT;
		salidaE = tagArticuloE;
	}
	if (strId == "tagAside") {
		salida  = tagAside;
		salidaT = tagAsideT;
		salidaE = tagAsideE;
	}
	if (strId == "tagFooter") {
		salida  = tagFooter;
		salidaT = tagFooterT;
		salidaE = tagFooterE;
	}
	

	document.getElementById('jsDetalle').innerHTML = salida; 
	document.getElementById('jsEjemplo').innerHTML = "<code>" + salidaE + "</code>"; 
	document.getElementById('titDescripcion').innerHTML = "Descripción " + salidaT; 	
	return false;
}