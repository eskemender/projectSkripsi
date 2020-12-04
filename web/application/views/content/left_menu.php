<?php DEFINED('BASE_URL') OR exit(header('location:403')); ?>

<div id="m_aside_left" class="m-grid__item	m-aside-left  m-aside-left--skin-dark ">
    <div id="m_ver_menu" class="m-aside-menu  m-aside-menu--skin-dark m-aside-menu--submenu-skin-dark " m-menu-vertical="1" m-menu-scrollable="1" m-menu-dropdown-timeout="500" style="position: relative;">
        <ul class="m-menu__nav  m-menu__nav--dropdown-submenu-arrow ">
            <li class="m-menu__item <?php $this->left_menu->master_data(''); ?>" aria-haspopup="true">
                <a href="" class="m-menu__link ">
                    <i class="m-menu__link-icon fa fa-database">
                        <span></span>
                    </i>
                    <span class="m-menu__link-text">Daftar pembeli</span>
                </a>
            </li>
        </ul>
    </div>
</div>
