// TODO: Suggest Select Options
const suggestions = [
  { label: 'codestates' },
  { label: 'node' },
  { label: 'react' },
  { label: 'redux' },
  { label: 'angular' },
  { label: 'javascript' },
  { label: 'typescript' },
  { label: 'java' },
  { label: 'c++' },
  { label: 'c' },
  { label: 'c#' },
  { label: 'python' },
  { label: 'tensorflow' },
  { label: 'deeplearning' },
  { label: 'precourse' }
].map(suggestion => ({
  value: suggestion.label,
  label: suggestion.label
}));

export default suggestions;
