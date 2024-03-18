<?xml version = "1.0" encoding="UTF-8" ?>
<!-- Group of 36-->
<!--- Zhong Tao 300222579 -->
<!--  Fengshou Xu 300036335-->

<xsl:stylesheet version = "1.0"
                xmlns:xsl = "http://www.w3.org/1999/XSL/Transform">
    <xsl:output method = "html" doctype-public="HTML" doctype-system = "about:legacy-compat" />
    <xsl:template match = "/">
        <html>
            <head>
                <title>Nutrition Information</title>
                <meta charset = "utf-8"/>
            </head>
            <body>

                <table border="1">
                    <caption>Nutrition Information of <xsl:value-of select="nutritionInfo/productName"/></caption>
                    <tr>
                        <th>Serving Size</th>
                        <td><xsl:value-of select="nutritionInfo/servingSize"/></td>
                    </tr>
                    <tr>
                        <th rowspan="2">Total Calories</th>
                        <td>
                            <xsl:value-of select="name(//nutritionInfo/calories/total)"/>
                            <xsl:text>: </xsl:text>
                            <xsl:value-of select="nutritionInfo/calories/total"/>
                            <xsl:text> </xsl:text>
                            <xsl:value-of select="nutritionInfo/calories/total/@unit"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <xsl:value-of select="name(//nutritionInfo/calories/fat)"/>
                            <xsl:text>: </xsl:text>
                            <xsl:value-of select="nutritionInfo/calories/fat"/>
                            <xsl:text> </xsl:text>
                            <xsl:value-of select="nutritionInfo/calories/fat/@unit"/>
                        </td>
                    </tr>
                    <tr>
                        <th rowspan="2">Fat</th>
                        <td>
                            <xsl:value-of select="name(//nutritionInfo/fat/total)"/>
                            <xsl:text>: </xsl:text>
                            <xsl:value-of select="nutritionInfo/fat/total"/>
                            <xsl:text> </xsl:text>
                            <xsl:value-of select="nutritionInfo/fat/total/@unit"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <xsl:value-of select="name(//nutritionInfo/fat/saturated)"/>
                            <xsl:text>: </xsl:text>
                            <xsl:value-of select="nutritionInfo/fat/saturated"/>
                            <xsl:text> </xsl:text>
                            <xsl:value-of select="nutritionInfo/fat/saturated/@unit"/>
                        </td>
                    </tr>
                    <tr>
                        <th>cholesterol</th>
                        <td>
                            <xsl:value-of select="nutritionInfo/cholesterol"/>
                            <xsl:text> </xsl:text>
                            <xsl:value-of select="nutritionInfo/cholesterol/@unit"/>
                        </td>
                    </tr>
                    <tr>
                        <th>sodium</th>
                        <td>
                            <xsl:value-of select="nutritionInfo/sodium"/>
                            <xsl:text> </xsl:text>
                            <xsl:value-of select="nutritionInfo/sodium/@unit"/>
                        </td>
                    </tr>
                    <tr>
                        <th rowspan="3">carbohydrates</th>
                        <td>
                            <xsl:value-of select="name(//nutritionInfo/carbohydrates/total)"/>
                            <xsl:text>: </xsl:text>
                            <xsl:value-of select="nutritionInfo/carbohydrates/total"/>
                            <xsl:text> </xsl:text>
                            <xsl:value-of select="nutritionInfo/carbohydrates/total/@unit"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <xsl:value-of select="name(//nutritionInfo/carbohydrates/fiber)"/>
                            <xsl:text>: </xsl:text>
                            <xsl:value-of select="nutritionInfo/carbohydrates/fiber"/>
                            <xsl:text> </xsl:text>
                            <xsl:value-of select="nutritionInfo/carbohydrates/fiber/@unit"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <xsl:value-of select="name(//nutritionInfo/carbohydrates/sugars)"/>
                            <xsl:text>: </xsl:text>
                            <xsl:value-of select="nutritionInfo/carbohydrates/sugars"/>
                            <xsl:text> </xsl:text>
                            <xsl:value-of select="nutritionInfo/carbohydrates/sugars/@unit"/>
                        </td>
                    </tr>
                    <tr>
                        <th>proteins</th>
                        <td>
                            <xsl:value-of select="nutritionInfo/proteins"/>
                            <xsl:text> </xsl:text>
                            <xsl:value-of select="nutritionInfo/proteins/@unit"/>
                        </td>
                    </tr>


                </table>
            </body>
        </html>
    </xsl:template>






</xsl:stylesheet>