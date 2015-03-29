<?php
/**
 * @file
 * universal_bar_notifications.features.inc
 */

/**
 * Implements hook_views_api().
 */
function universal_bar_notifications_views_api($module = NULL, $api = NULL) {
  return array("api" => "3.0");
}

/**
 * Implements hook_flag_default_flags().
 */
function universal_bar_notifications_flag_default_flags() {
  $flags = array();
  // Exported flag: "Read".
  $flags['read'] = array(
    'entity_type' => 'node',
    'title' => 'Read',
    'global' => 0,
    'types' => array(
      0 => 'notification',
    ),
    'flag_short' => 'Read',
    'flag_long' => 'Mark as Read',
    'flag_message' => '',
    'unflag_short' => 'Unread',
    'unflag_long' => 'Mark as Unread',
    'unflag_message' => '',
    'unflag_denied_text' => '',
    'link_type' => 'toggle',
    'weight' => 0,
    'show_in_links' => array(
      'full' => 'full',
      'teaser' => 'teaser',
      'rss' => 0,
    ),
    'show_as_field' => 1,
    'show_on_form' => 0,
    'access_author' => '',
    'show_contextual_link' => FALSE,
    'i18n' => 0,
    'api_version' => 3,
    'module' => 'universal_bar_notifications',
    'locked' => array(
      0 => 'name',
    ),
  );
  return $flags;

}

/**
 * Implements hook_node_info().
 */
function universal_bar_notifications_node_info() {
  $items = array(
    'notification' => array(
      'name' => t('Notification'),
      'base' => 'node_content',
      'description' => t('Add a notification that will populate across all sites and allow users to click through'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  drupal_alter('node_info', $items);
  return $items;
}
