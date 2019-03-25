<?php
function register_blocks()
{
    if (function_exists('acf_register_block')) {

        $blockies = array('hero');
        $blockiesIcons = array('align-center');
        $blockies = array_combine($blockies, $blockiesIcons);

        foreach ($blockies as $b => $v) {
            acf_register_block(array(
                'description' => __('A custom' . $b . 'block.'),
                'icon' => $v,
                'mode' => 'edit',
                'name' => $b,
                'render_callback' => 'my_' . $b . '_block_html',
                'supports' => array(
                    'align' => array('wide', 'full'),
                ),
                'title' => __(ucfirst($b)),
            ));
        }
    }

    function my_hero_block_html($block)
    {
        $vars['block'] = $block;
        $vars['fields'] = get_fields();

        Timber::render('/blocks/hero.twig', $vars);
    }
}
