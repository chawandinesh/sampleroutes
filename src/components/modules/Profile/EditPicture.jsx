/**
 * Edit picture
 */
import React, { useState } from "react";
import { Upload } from "antd";

/**
 * @class @name EditPicture
 * @classdesc to edit and upload the picture in edit tab
 */
class EditPicture extends React.Component {
  /**
   * updates the file list with new  uploaded picture
   * @method @name onChange
   * @param {object} fileList
   */
  onChange = ({ fileList: newFileList }) => {
    this.setState({
      fileList: newFileList,
    });
    this.props.atnImageUpload(newFileList);
  };

  /**
   * to view the image
   * @method @name onPreview
   * @param {object} file
   *
   */
  onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  /**
   * @render
   * returns the ui on the page
   */
  render() {
    return (
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={this.props.imageList}
        onChange={this.onChange}
        onPreview={this.onPreview}
      >
        {this.props.imageList.length < 1 && "+ Upload"}
      </Upload>
    );
  }
}

export default EditPicture;
