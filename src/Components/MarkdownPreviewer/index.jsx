import React from 'react'
import marked from 'marked';
import styles from './markdown.module.scss'

const placeholder = `# Welcome to my simple React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

* Lists
* [ ]  todo
* [x]  done

![Image](https://artfiles.alphacoders.com/130/thumb-130513.jpg)
`;

class MarkdownContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      markdown: ''
    }

  }

  componentDidMount(){
    this.setState({markdown: placeholder})
  }

  handleChange = (e) =>{
    this.setState({
      markdown: e.target.value
    })
  }

  createMarkup() {
    return{__html: marked(this.state.markdown, {breaks: true})}
  }

  render() {
    return (
      <div className={styles.wrapper}>
          <div className={styles.header}>
            <h1>Markdown previewer</h1>
          </div>
        <div className={styles.content}>
          <div className={styles.editor_section}>
            <h2 className={styles.subheader}>Editor</h2>
            <div className={styles.sad}>
              <textarea className="" type="text" id="editor" onChange={this.handleChange} value={this.state.markdown} />
            </div>

          </div>
          <div className={styles.preview_section} >
            <h2 className={styles.subheader}>Preview</h2>
              <div id={styles.preview} dangerouslySetInnerHTML={this.createMarkup()} >{this.markdown}</div>
          </div>
        </div>
      </div>

    )
  }
}
export default MarkdownContainer