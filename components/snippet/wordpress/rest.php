<?php
function rest_posts($data)
{
    $args = array(
        'posts_per_page' => -1,
        'post_status' => 'publish',
        'post_type' => 'post',
    );

    $loop = new WP_Query($args);

    if ($loop) {
        $insightItems = array();
        while ($loop->have_posts()): $loop->the_post();
            $the_content = convert_content(get_the_content());
            $the_content = get_the_content();
            array_push(
                $insightItems, array(
                    'content' => $the_content,
                    'date' => get_the_time('c'),
                    'excerpt' => get_post_meta(get_the_ID(), '_yoast_wpseo_metadesc', true),
                    'id' => get_the_ID(),
                    'imageLargest' => get_the_post_thumbnail_url(get_the_ID(), 'largest'),
                    'imageDesktop' => get_the_post_thumbnail_url(get_the_ID(), 'desktop'),
                    'imageLaptop' => get_the_post_thumbnail_url(get_the_ID(), 'laptop'),
                    'imageTablet' => get_the_post_thumbnail_url(get_the_ID(), 'tablet'),
                    'imageMobile' => get_the_post_thumbnail_url(get_the_ID(), 'mobile'),
                    'thumbnailTall' => get_the_post_thumbnail_url(get_the_ID(), 'thumbnail-tall'),
                    'thumbnailDefault' => get_the_post_thumbnail_url(get_the_ID(), 'thumbnail-default'),
                    'thumbnailSmall' => get_the_post_thumbnail_url(get_the_ID(), 'thumbnail-small'),
                    'imageFull' => get_the_post_thumbnail_url(),
                    'link' => get_the_permalink(),
                    'seoTitle' => get_post_meta(get_the_ID(), '_yoast_wpseo_title', true),
                    'slug' => get_post_field('post_name'),
                    'title' => get_the_title(),
                )
            );
        endwhile;

        wp_reset_postdata();
    }

    return $insightItems;
}
