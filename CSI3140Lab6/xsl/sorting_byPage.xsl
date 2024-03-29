<?xml version = "1.0"?>

<!-- Group of 36-->
<!--- Zhong Tao 300222579 -->
<!--  Fengshou Xu 300036335-->
<xsl:stylesheet version = "1.0"                       
   xmlns:xsl = "http://www.w3.org/1999/XSL/Transform">

   <!-- write XML declaration and DOCTYPE DTD information -->
   <xsl:output method = "html" doctype-system = "about:legacy-compat" />

   <!-- match document root -->
   <xsl:template match = "/">  
      <html>
         <xsl:apply-templates/>
      </html>
   </xsl:template>
   
   <!-- match book -->          
   <xsl:template match = "book">
      <head>
         <meta charset = "utf-8"/>
         <link rel = "stylesheet" type = "text/css" href = "../css/style.css"/>
         <title>ISBN <xsl:value-of select = "@isbn"/> - 
            <xsl:value-of select = "title"/></title>    
      </head>

      <body>
         <h1><xsl:value-of select = "title"/></h1>
         <h2>by 
            <xsl:value-of select = "author/lastName"/>,     
            <xsl:value-of select = "author/firstName"/></h2>

         <table>

            <xsl:for-each select = "chapters/frontMatter/*">
               <!--here we add the "select = "@pages" sort logic -->
               <xsl:sort select = "@pages" data-type = "number"
                         order = "ascending"/>
               <tr>
                  <td>
                     <xsl:value-of select = "name()"/>
                  </td>

                  <td>
                     ( <xsl:value-of select = "@pages"/> pages )
                  </td>
               </tr>
            </xsl:for-each>

            <xsl:for-each select = "chapters/chapter">
               <!--here we only need to modify "select = "@number"
                to "select = "@pages" -->
               <xsl:sort select = "@pages" data-type = "number"
                    order = "ascending"/>
               <tr>
                  <td>
                     Chapter <xsl:value-of select = "@number"/>
                  </td>

                  <td>
                     <xsl:value-of select = "text()"/>
                     ( <xsl:value-of select = "@pages"/> pages )
                  </td>
               </tr>
            </xsl:for-each>

            <xsl:for-each select = "chapters/appendix">
               <!-- we modified here from "select = "@number"
                to "select = "@pages" and changes the data-type = "text"
                to data-type = "number"-->
               <xsl:sort select = "@pages" data-type = "number"
                  order = "ascending"/>                        
               <tr>
                  <td>
                     Appendix <xsl:value-of select = "@number"/>
                  </td>

                  <td>
                     <xsl:value-of select = "text()"/>
                     ( <xsl:value-of select = "@pages"/> pages )
                  </td>
               </tr>
            </xsl:for-each>
         </table>

         <p>Pages: 
            <xsl:variable name = "pagecount"       
               select = "sum(chapters//*/@pages)"/>
            <xsl:value-of select = "$pagecount"/></p> 
         <p>Media Type: <xsl:value-of select = "media/@type"/></p>
      </body>
   </xsl:template>
</xsl:stylesheet>


