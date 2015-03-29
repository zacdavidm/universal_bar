<?php
/**
 * @file
 * universal_bar_notifications.features.taxonomy.inc
 */

/**
 * Implements hook_taxonomy_default_vocabularies().
 */
function universal_bar_notifications_taxonomy_default_vocabularies() {
  return array(
    'sites' => array(
      'name' => 'Sites',
      'machine_name' => 'sites',
      'description' => 'List of Forgood websites, used for filtering universal views',
      'hierarchy' => 0,
      'module' => 'taxonomy',
      'weight' => 0,
    ),
  );
}
