<?php

  DEFINED('BASE_URL') OR exit(header('location: 303'));

  doctype();
  to('html', 'lang::en');
    to('head');
      title('User Manual | Libraries');
      responsive_meta();
      base_url();

      system_css('reset');
      system_css('font');
      system_css('madeline');
      system_css('manual-ls');
      bar_icon(BASE_URL.'system_config/ML_Assets/logo/mlb-logo.png');
    tc('head');


    to('body', 'role::content');
      to('div', 'class::inner-body');
        INCLUDE USER_GUIDE_PATH.'ug_views/navigation/left-menu.php';
        to('div', 'class::mm-menu*show-mmm');
          tag('img', 'src::'.BASE_URL.'system_config/ML_Assets/icons/menu.png');
        tc('div');

        to('div', 'class::rsb-heading*hide');
          to('a', 'href::');
            tag('img','class::manual-mi src::'.BASE_URL.'system_config/ML_Assets/logo/ml-logo.png');
            to('div', 'class::rsm-heading');
              to('div', 'class::manual-lfn style::letter-spacing:1.7px').
                  to('span', 'style::color:#006d88').show('Made').tc('span').
                  to('span').show('Line').tc('span').
              tc('div');
              to('div', 'class::manual-lfn*bot-manual-lfn').show('PHP - Ajax Framewok').tc('div');
            tc('div');
          tc('a');
        tc('div');

        to('section', 'class::wy-nav-content-wrap');
          to('div', 'class::wy-nav-content');
            to('div' ,'class::head-nav role::navigation');
              to('a', 'class::link*docs href::manual/english').show('Manual &nbsp;').tc('a').arrow().show('&nbsp; Libraries');
            tc('div');
            ul();            
            to('div', 'id::content-holder');          
              to('h1','class::h1').show('MadeLine Built-In Libraries').tc('h1');
              to('ol', 'class::manual-li*ffn');            
                to('li');
                  to('a', 'class::link*docs href::manual/english/libraries/ajax');
                    show('Ajax');
                  tc('a');
                tc('li');
              
                to('li');
                  to('a', 'class::link*docs href::manual/english/libraries/cookies');
                    show('Cookies');
                  tc('a');
                tc('li');
              
                to('li');
                  to('a', 'class::link*docs href::manual/english/libraries/file');
                    show('File (Upload Class)');
                  tc('a');
                tc('li');
              
                to('li');
                  to('a', 'class::link*docs href::manual/english/libraries/form');
                    show('Form (Form Validation)');
                  tc('a');
                tc('li');
              
                to('li');
                  to('a', 'class::link*docs href::manual/english/libraries/html-generator');
                    show('HTML Generator');
                  tc('a');
                tc('li');
              
                to('li');
                  to('a', 'class::link*docs href::manual/english/libraries/input');
                    show('Input');
                  tc('a');
                tc('li');
              
                to('li');
                  to('a', 'class::link*docs href::manual/english/libraries/query-liner');
                    show('ML Query Liner');
                  tc('a');
                tc('li');
              
                to('li');
                  to('a', 'class::link*docs href::manual/english/libraries/pagination');
                    show('Pagination');
                  tc('a');
                tc('li');
              
                to('li');
                  to('a', 'class::link*docs href::manual/english/libraries/session');
                    show('Session');
                  tc('a');
                tc('li');
              
                to('li');
                  to('a', 'class::link*docs href::manual/english/libraries/xsrf');
                    show('XSRF (Cross Site Request Forgery)');
                  tc('a');
                tc('li'); 
              tc('ol');
            tc('div');            
            ul();
            INCLUDE ML_CONFIG_PATH.'navigation/footer.php';
          tc('div');
        tc('section');
      tc('div');
      ajax();
      system_js('ajax_function');
      system_js('ajax_return');      
    tc('body');
  tc('html');
?>
