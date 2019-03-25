<?php
function misha_allowed_block_types($allowed_blocks)
{
    $blockArray = array();
    $blockies = array('hero', 'row');

    foreach ($blockies as $v) {
        array_push($blockArray, 'acf/' . $v);
    }

    return $blockArray;
}
