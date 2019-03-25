<?php

function misha_allowed_block_types($allowed_blocks)
{
    $blockArray = array();
    $blockies = array('dribbble', 'github', 'hero', 'presentations', 'row');

    foreach ($blockies as $v) {
        array_push($blockArray, 'acf/' . $v);
    }

    return $blockArray;
}
