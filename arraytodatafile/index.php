<?php
/**
 * Plugin Name: arraytodatafile
 * Plugin URI: http://www.mywebsite.com/my-first-plugin
 * Description: Exports array to data file, vice versa.
 * Version: 1.0
 * Author: Steven Curnow
 * Author URI: codexx1.000webhostapp.com
 */

add_action( 'wp_enqueue_scripts', 'displayHTMLpage' );

function displayHTMLpage() {
    include( 'index.html' );
}

?>