import { StoryWrapper } from '../../components/StoryWrapper/StoryWrapper';
import attributes from './attributes.json';
import { StatsGridIcons } from './StatsGridIcons';

export default { title: 'StatsGridIcons' };

export function Usage() {
  return <StoryWrapper attributes={attributes} component={StatsGridIcons} />;
}
