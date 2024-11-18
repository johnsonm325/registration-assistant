import CentosLinuxRegContent from './CentosLinuxRegContent';
import RHEL8RegContent from './RHEL8RegContent';
import RHEL7RegContent from './RHEL7RegContent';
import RHEL9RegContent from './RHEL9RegContent';

export const operatingSystemList = [
  {
    id: 'centos-radio',
    name: 'CentOS Linux',
    content: CentosLinuxRegContent,
  },
  {
    id: 'rhel7-radio',
    name: 'RHEL 7',
    content: RHEL7RegContent,
  },
  {
    id: 'rhel8-radio',
    name: 'RHEL 8',
    content: RHEL8RegContent,
  },
  {
    id: 'rhel9-radio',
    name: 'RHEL 9 or later',
    content: RHEL9RegContent,
  },
];
