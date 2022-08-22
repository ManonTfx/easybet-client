/* eslint-disable react/jsx-props-no-spreading */
import { useMutation } from '@apollo/client';
import React, { useContext, useState } from 'react';
import Dropzone from 'react-dropzone';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Editor, EditorTools, EditorUtils } from '@progress/kendo-react-editor';
import { CREATE_ARTICLE } from '../../API/mutation/articles';
import TextInput from '../formInputs/TextInput';
import { GET_ALL_ARTICLES } from '../../API/query/articles';
import upload from '../../assets/upload.svg';
import arrow_right from '../../assets/arrow_right.svg';
import { AuthContext } from '../../context/authContext';

interface IProps {
  setIsForm: React.Dispatch<React.SetStateAction<boolean>>;
}

function CreateUpdateTuto({ setIsForm }: IProps): JSX.Element {
  const editor = React.createRef<Editor>();

  const { handleSubmit } = useForm();
  const [titleArticle, setTitleArticle] = useState('');
  const [categoryArticle, setCategoryArticle] = useState('');
  const [imgArticle, setImgArticle] = useState('');

  const { user } = useContext(AuthContext);

  const {
    Bold,
    Italic,
    Underline,
    AlignLeft,
    AlignRight,
    AlignCenter,
    Indent,
    Outdent,
    OrderedList,
    UnorderedList,
    Undo,
    Redo,
    Link,
    Unlink,
  } = EditorTools;

  const uploadImage = (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'bx4sdw4m');
    console.log(formData);

    fetch('https://api.cloudinary.com/v1_1/dk2hhjwva/image/upload', {
      method: 'POST',
      body: formData,
    })
      .then(async (res) => {
        const response = await res.json();
        setImgArticle(response.url);
        console.log(response.url);
      })
      .catch((err) => console.log(err));
  };

  // **  CREATE ARTICLE
  const [createArticle, { loading: createLoading, error: createError }] =
    useMutation(CREATE_ARTICLE, {
      onCompleted: () => {
        setIsForm(false);
        toast('Votre article a bien été créé!');
      },
      refetchQueries: [GET_ALL_ARTICLES],
    });

  const onSubmit = () => {
    if (editor.current?.view) {
      const articleData = {
        category: categoryArticle,
        title: titleArticle,
        contents: EditorUtils.getHtml(editor.current.view.state),
        img: imgArticle,
        userId: user?.login.id,
      };

      createArticle({ variables: { ...articleData } });
    }
  };

  if (createLoading) {
    return <p>...loading</p>;
  }
  if (createError) {
    console.log('Une erreur est survenue');
  }
  return (
    <div className="w-full">
      <button
        onClick={() => setIsForm(false)}
        type="button"
        className="flex items-center"
      >
        <img className="rotate-180" src={arrow_right} alt="back" />
        <p className="text-sm ml-4">Revenir aux articles</p>
      </button>
      <form onSubmit={handleSubmit(onSubmit)} action="create/update/track">
        <div className="w-full">
          <TextInput
            placeholder="Titre"
            label=""
            id="title"
            required
            error=""
            value={titleArticle}
            setValue={setTitleArticle}
          />
        </div>
        <div className="w-full">
          <TextInput
            placeholder="Catégorie"
            label=""
            id="category"
            required
            error=""
            value={categoryArticle}
            setValue={setCategoryArticle}
          />
        </div>
        <Dropzone
          onDrop={(acceptedFiles) => {
            uploadImage(acceptedFiles[0]);
          }}
        >
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <button
                  style={{
                    border: '1px dashed #5D6AD2',
                  }}
                  type="button"
                  className="flex text-sm justify-between items-center w-full mt-5 py-2 px-[16px] rounded-[5px]"
                >
                  <p>Ajouter une image</p>
                  <img src={upload} alt="ajouter un fichier" />
                </button>
              </div>
            </section>
          )}
        </Dropzone>
        <div
          style={{ border: '1px solid #5d6ad2' }}
          className="mt-5 rounded-[5px] overflow-hidden"
        >
          <Editor
            tools={[
              [Bold, Italic, Underline],
              [Undo, Redo],
              [Link, Unlink],
              [AlignLeft, AlignCenter, AlignRight],
              [OrderedList, UnorderedList, Indent, Outdent],
            ]}
            style={{
              backgroundColor: '#DDDFF2',
            }}
            contentStyle={{
              height: 320,
            }}
            ref={editor}
            className="totototo"
          />
        </div>
        <button
          className="!text-white text-lg  items-center mt-5 float-right flex bg-primary py-2 px-8 rounded-[5px]"
          type="submit"
        >
          Valider
          <img className="ml-6" src={arrow_right} alt="back" />
        </button>
      </form>
    </div>
  );
}

export default CreateUpdateTuto;
