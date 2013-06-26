{%html class="expanded"%}
{%head%}
    <meta charset="utf-8"/>
    <title>{%$title%}</title>
    <!--[if lt IE 9]>
        <script src="/lib/js/html5.js"></script>
    <![endif]-->
    {%require name="lib/css/bootstrap.css"%}
    {%require name="lib/css/bootstrap-responsive.css"%}
    {%require name="lib/css/style.css"%}
    {%require name="lib/js/mod.js"%}
    {%require name="lib/js/jquery-1.10.1.js"%}
{%/head%}
{%body%}
    <div id="wrapper">
        <div id="sidebar">
            {%widget
                name="widget/sidebar/sidebar.tpl"
                data=$docs
            %}
        </div>
        <div id="container">
            {%widget name="widget/slogan/slogan.tpl"%}
            {%foreach $docs as $index=>$doc%}
                {%widget
                    name="widget/section/section.tpl"
                    call="section"
                    data=$doc index=$index
                %}
            {%/foreach%}
        </div>
    </div>
    {%require name="page/index.css"%}
{%/body%}
{%/html%}