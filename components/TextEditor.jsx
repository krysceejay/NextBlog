import React, {useState} from 'react'
import dynamic from 'next/dynamic'
import embed from "embed-video"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
// import {imageUpload} from '../utils/imageUpload'

const Editor = dynamic(
    () => import('react-draft-wysiwyg')
    .then(module => module.Editor),
    { ssr: false }
  )

const TextEditor = ({editorState, onEditorStateChange}) => {

    // const uploadImageCallBack = file => {
    //     return new Promise(
    //       (resolve, reject) => {
    //         if(file.type !== 'image/jpeg' && file.type !== 'image/png') {
    //             const err = 'Image format is incorrect.'
    //             reject(err)
    //         }

    //         imageUpload([file])
    //         .then(img => resolve({ data: { link: img[0].url } }))
    //       },
    //     )
    //   }

    function uploadImageCallBack(file) {
      return new Promise(
        (resolve, reject) => {
          const reader = new FileReader(); // eslint-disable-line no-undef
          reader.onload = e => resolve({ data: { link: e.target.result } })
          reader.onerror = e => reject(e)
          reader.readAsDataURL(file)
        })
    }

      {/* <textarea
                disabled
                value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
            /> */}

    return (
            <Editor 
              spellCheck
              editorState={editorState}
              onEditorStateChange={onEditorStateChange}
              toolbarClassName="flex !sticky !top-16 z-50"
              editorClassName="bg-white shadow-md p-4 min-h-64"
              toolbar={{
                inline: { inDropdown: true },
                list: { inDropdown: true },
                textAlign: { inDropdown: true },
                link: { 
                  inDropdown: true, 
                  defaultTargetOption: '_blank',
                  linkCallback: params => ({ ...params }) 
                },
                history: { inDropdown: true },
                image: { 
                  previewImage: true, 
                  uploadCallback: uploadImageCallBack, 
                  alt: { present: true, mandatory: false },
                  defaultSize: {
                    height: '100%',
                    width: '100%',
                  },
                },
                embedded: {
                  embedCallback: link => {
                    const detectedSrc = /<iframe.*? src="(.*?)"/.exec(embed(link))
                    return (detectedSrc && detectedSrc[1]) || link
                  }
                }
              }}
            />
            
        )
}

export default TextEditor
