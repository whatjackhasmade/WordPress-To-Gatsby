<?php
/* Register function to run at rest_api_init hook */
add_action('rest_api_init', function () {
    /* Setup siteurl/wp-json/posts/v2/all */
    register_rest_route('posts/v2', '/all', array(
        'methods' => 'GET',
        'callback' => 'rest_posts',
        'args' => array(
            'slug' => array(
                'validate_callback' => function ($param, $request, $key) {
                    return is_string($param);
                },
            ),
        ),
    ));
});
