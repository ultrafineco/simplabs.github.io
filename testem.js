'use strict';

module.exports = {
  test_page: 'tests/index.html',
  disable_watching: true,
  launch_in_ci: ['Chrome'],
  launch_in_dev: ['Chrome'],
  browser_args: {
    Chrome: {
      mode: 'ci',
      args: ['--no-sandbox', '--disable-gpu', '--headless', '--remote-debugging-port=0', '--window-size=1440,900'],
    },
  },
};
