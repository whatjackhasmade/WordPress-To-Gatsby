<?php
function convert_content($content)
{
    $content = str_replace('<!-- wp:acf/hero ', '', $content);
    $content = str_replace('https://wjhm.noface.app/', '/', $content);
    $content = str_replace('http://local-whatjackhasmade.co.uk/', '/', $content);
    $content = str_replace(' /-->', ',', $content);
    $find = ',';
    $replace = '';
    $content = preg_replace(strrev("/$find/"), strrev($replace), strrev($content), 1);
    $content = strrev($content);

    $content = '[' . $content . ']';

    $ACFTitles = getACFTitles($content, 'field_', '"');

    foreach ($ACFTitles as $key => $value) {
        $content = str_replace($key, $value, $content);
    }

    $content = getACFImages($content);

    return $content;
}
