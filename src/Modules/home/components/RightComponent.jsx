import React from 'react';
import styled from 'styled-components';
import {FaPlus, FaEdit, FaTrashAlt} from 'react-icons/fa';
import Icon from '../../../assets/Logo.svg'

const StyledRightComponent = styled.div`
    width: 70%;
    background-color: #e1f5fe
;
    height: 100vh;
    float: right;
    padding: 15px 30px;
    overflow-y: scroll;
`

const Heading = styled.div`
  height: 60px;
  padding: 15px 0 10px;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid gray;

  font {
    font-size: 1.5rem;
  }
`

const FolderDiv = styled.div`
  margin-top: 20px;

  .accordion-button {
    background-color: #3D5D74;
    color: #FFF;
  }
`

const FolderLayout = styled.div`
  margin: 0;

  .folder-operation-head {
    display: flex;
    justify-content: space-evenly;
  }

  .folder-file-div {
    margin-top: 10px;
    padding-bottom: 10px;
  }

  .file-card {
    height: 70px;
    padding: 5px;
    margin-top: 15px;
    border-radius: 5px;
    box-shadow: 1px 1px 5px 0.4px #666;
    background-color: #fff;
  }

  .file-icon {
    width: 100%;
    height: 100%;
  }

  .file-icon-div {
    width: 20%;
    height: 100%;
    float: left;
  }

  .file-content-div {
    width: 80%;
    height: 100%;
    padding: 5px 5px 5px 10px;
    float: right;
  }

  .file-heading {
    display: flex;
    justify-content: space-between;
  }

  .row {
    margin: 0;
  }
`

function RightComponent() {
  return (
    <StyledRightComponent>
      <Heading>
        <font>My <b>Environment</b></font>
        <button><FaPlus/>New Folder</button>
      </Heading>

      <FolderDiv>
        <div className="accordion">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false">
                Folder Name
              </button>
            </h2>
            
            <div id="flush-collapseOne" className="accordion-collapse collapse">
              <div className="accordion-body" style={{padding: '10px 5px 5px'}} >
                <FolderLayout>
                  <div className='folder-operation-head'>
                    <button><FaEdit/>Edit Folder</button> <button><FaTrashAlt/> Delete folder</button> <button><FaPlus/> New File</button>
                  </div>
                  <div className='folder-file-div'>
                    <div className="row">
                      {
                        Array.from({length : 5}).map(()=> (
                          <div className='col-md-4'>
                            <div className="file-card">
                              <div className="file-icon-div">
                                <img src={Icon} alt="File Icon" className="file-icon" />
                              </div>
                              <div className="file-content-div">
                                <div className="file-heading">
                                  <span><b>File Name</b></span>
                                  <div>
                                    <FaEdit/> &nbsp;
                                    <FaTrashAlt/>
                                  </div>
                                </div>
                                <div>
                                  <span><b>Language:</b> JavaScript </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                </FolderLayout>
              </div>
            </div>
          </div>
        </div>
      </FolderDiv>

      <FolderDiv>
        <div className="accordion">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false">
                Folder Name
              </button>
            </h2>
            
            <div id="flush-collapseTwo" className="accordion-collapse collapse">
              <div className="accordion-body" style={{padding: '10px 5px 5px'}} >
                <FolderLayout>
                  <div className='folder-operation-head'>
                    <button><FaEdit/>Edit Folder</button> <button><FaTrashAlt/> Delete folder</button> <button><FaPlus/> New File</button>
                  </div>
                  <div className='folder-file-div'>
                    <div className="row">
                      {
                        Array.from({length : 5}).map(()=> (
                          <div className='col-md-4'>
                            <div className="file-card">
                              <div className="file-icon-div">
                                <img src={Icon} alt="File Icon" className="file-icon" />
                              </div>
                              <div className="file-content-div">
                                <div className="file-heading">
                                  <span><b>File Name</b></span>
                                  <div>
                                    <FaEdit/> &nbsp;
                                    <FaTrashAlt/>
                                  </div>
                                </div>
                                <div>
                                  <span><b>Language:</b> JavaScript </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                </FolderLayout>
              </div>
            </div>
          </div>
        </div>
      </FolderDiv>

      <FolderDiv>
        <div className="accordion">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false">
                Folder Name
              </button>
            </h2>
            
            <div id="flush-collapseThree" className="accordion-collapse collapse">
              <div className="accordion-body" style={{padding: '10px 5px 5px'}} >
                <FolderLayout>
                  <div className='folder-operation-head'>
                    <button><FaEdit/>Edit Folder</button> <button><FaTrashAlt/> Delete folder</button> <button><FaPlus/> New File</button>
                  </div>
                  <div className='folder-file-div'>
                    <div className="row">
                      {
                        Array.from({length : 5}).map(()=> (
                          <div className='col-md-4'>
                            <div className="file-card">
                              <div className="file-icon-div">
                                <img src={Icon} alt="File Icon" className="file-icon" />
                              </div>
                              <div className="file-content-div">
                                <div className="file-heading">
                                  <span><b>File Name</b></span>
                                  <div>
                                    <FaEdit/> &nbsp;
                                    <FaTrashAlt/>
                                  </div>
                                </div>
                                <div>
                                  <span><b>Language:</b> JavaScript </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                </FolderLayout>
              </div>
            </div>
          </div>
        </div>
      </FolderDiv>

    </StyledRightComponent>
  )
}

export default RightComponent