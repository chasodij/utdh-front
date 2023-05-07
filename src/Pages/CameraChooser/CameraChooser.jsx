import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import {FetchProduct} from "../../Data/Fetch";
import "./CameraChooser.css";

const portalElement = document.getElementById("overlays");

const CameraChooser = (props) => {
  const cameras = [
    { id: 1, name: "EOS M50 Mark II", points: 0 },
    { id: 2, name: "EOS 2000D BK 18-55 IS", points: 0 },
    { id: 3, name: "Cyber-Shot DSC-RX100 MkVI", points: 0 },
    { id: 4, name: "Fujifilm Instax Mini 90 Black", points: 0 },
    { id: 5, name: "EOS R10 Black + RF-S 18-150mm", points: 0 },
  ];

  const questions = [
    {
      question: "Яку цінову категорію фотоапаратів ви розглядаєте?",
      points: 2,
      options: [
        { optionId: 1, optionText: "До 25 000 грн", cameraIds: [2, 4] },
        { optionId: 2, optionText: "До 40 000 грн", cameraIds: [1, 2, 3, 4] },
        {
          optionId: 3,
          optionText: "До 70 000 грн",
          cameraIds: [1, 2, 3, 4, 5],
        },
      ],
    },
    {
      question: "Ви початківець у фотографії?",
      points: 1,
      options: [
        { optionId: 1, optionText: "Так", cameraIds: [1, 2, 4] },
        { optionId: 2, optionText: "Ні, вже маю досвід", cameraIds: [3, 5] },
      ],
    },
    {
      question: "Якому використанню фотоапарата надаєте переваги?",
      points: 1,
      options: [
        { optionId: 1, optionText: "Ведення відеоблогу", cameraIds: [1, 5] },
        {
          optionId: 2,
          optionText: "Створення крутих фото з друзями",
          cameraIds: [1, 2, 4],
        },
        {
          optionId: 3,
          optionText: "Перетворення миті на мистецтво",
          cameraIds: [3, 5],
        },
        {
          optionId: 4,
          optionText: "Фільмування власних подорожей",
          cameraIds: [1, 3, 5],
        },
      ],
    },
    {
      question: "Чи приваблює вас аналогова фотографія (плівка, папір)?",
      points: 1,
      options: [
        { optionId: 1, optionText: "Так, цікавлюся цим", cameraIds: [4] },
        {
          optionId: 2,
          optionText: "Ні, надаю перевагу цифрі",
          cameraIds: [1, 2, 3, 5],
        },
      ],
    },
    {
      question: "Оберіть ще кілька функцій, що є важливими для вас:",
      points: 1,
      options: [
        {
          optionId: 1,
          optionText: "Зйомка швидких моментів",
          cameraIds: [1, 2, 3, 5],
        },
        { optionId: 2, optionText: "Макрозйомка", cameraIds: [1, 3, 5] },
        {
          optionId: 3,
          optionText: "Потокова передача відео",
          cameraIds: [1, 5],
        },
        { optionId: 4, optionText: "Компактність", cameraIds: [3, 4] },
      ],
      multioptions: true,
    },
  ];

  const addPointsToCameras = (questionId, optionId) => {
    let option = questions[questionId].options.find(
      (x) => x.optionId === optionId
    );
    for (let i = 0; i < option.cameraIds.length; i++) {
      let camera = cameras.find((x) => x.id === option.cameraIds[i]);
      camera.points += questions[questionId].points;
    }
  };

  const [chooserState, setChooserState] = useState({
    currentIndex: 0,
    selectedOptions: [],
  });
  const [winnerState, setWinnerState] = useState({
    winner: {},
    isChoosed: false,
  });

  const prevQuestionHandler = () => {
    setChooserState((prevState) => {
      let newState = { ...prevState };
      if (newState.currentIndex > 0) {
        newState.currentIndex--;
      }
      return newState;
    });
  };

  const nextQuestionHandler = () => {
    setChooserState((prevState) => {
      let newState = { ...prevState };
      if (newState.currentIndex < questions.length - 1) {
        newState.currentIndex++;
      }
      return newState;
    });
  };

  const chooseOptionHandler = (idx) => {
    setChooserState((prevState) => {
      let newState = { ...prevState };
      if (newState.selectedOptions[newState.currentIndex] === undefined) {
        newState.selectedOptions[newState.currentIndex] = [];
      }
      if (newState.selectedOptions[newState.currentIndex].includes(idx)) {
        if (questions[newState.currentIndex].multioptions) {
          newState.selectedOptions[newState.currentIndex] =
            newState.selectedOptions[newState.currentIndex].filter(
              (x) => x != idx
            );
          return newState;
        }
        newState.selectedOptions[newState.currentIndex] = [];
      }
      newState.selectedOptions[newState.currentIndex].push(idx);
      return newState;
    });
  };

  const chooseWinner = async () => {
    for (let i = 0; i < chooserState.selectedOptions.length; i++) {
      chooserState.selectedOptions[i]?.forEach((x) => {
        addPointsToCameras(i, x);
      });
    }
    cameras[0].points++;

    let winnerId = cameras.reduce((prev, cur) => prev.points > cur.points ? prev : cur).id

    const response = await FetchProduct(winnerId);
    const data = await response.json();

    setWinnerState({
      winner: {id: winnerId, name: data?.modelName, photo: data?.photo},
      isChoosed: true,
    });


    console.log(cameras);
    console.log(winnerState);
  };

  const restartChooser = () => {
    setChooserState({ currentIndex: 0, selectedOptions: [] });
    setWinnerState({ winner: null, isChoosed: false });
  };

  return (
    <>
      {ReactDOM.createPortal(
        <div
          className="overlay"
          id="overlay"
          onClick={props.hideCameraChooser}
        />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <div className="chooser-modal-container bg-white">
          <div className="row justify-content-between align-items-center py-1 h-20">
            <div className="col-8">
              <span className="h2">Допомога з вибором камери</span>
            </div>
            <div className="col-4 p-3 text-end">
              <button
                type="button"
                className="btn-close btn-outline-light"
                aria-label="Close"
                onClick={props.hideCameraChooser}
              ></button>
            </div>
          </div>
          {winnerState.isChoosed ? (
            <div className="questions-block">
              <span className="h5 d-block">
                Можемо порекомендувати дану камеру на основі ваших відповідей:
              </span>
              <img
                className="winner-image"
                src={winnerState.winner.photo}
              ></img>
              <a
                className="h4 align-top"
                href={"/product/" + winnerState.winner.id}
              >
                {winnerState.winner.name}
              </a>
              <div className="text-center">
                <button
                  type="button"
                  className="btn btn-dark chooser-button"
                  onClick={restartChooser}
                >
                  Пройти заново
                </button>
              </div>
            </div>
          ) : (
            <div className="questions-block">
              <span className="h5 d-block h-10">
                {questions[chooserState.currentIndex].question}
              </span>
              <div className="d-flex flex-column justify-content-between h-90">
                <div>
                  {questions[chooserState.currentIndex].options.map((x) => (
                    <div key={x.optionId}>
                      <input
                        type={
                          questions[chooserState.currentIndex].multioptions
                            ? "checkbox"
                            : "radio"
                        }
                        className="btn-check"
                        name="options"
                        id={"option" + x.optionId}
                        autoComplete="off"
                        onChange={(e) => e.preventDefault()}
                        checked={chooserState.selectedOptions[
                          chooserState.currentIndex
                        ]?.includes(x.optionId)}
                      />
                      <label
                        className="btn btn-outline-dark chooser-option"
                        htmlFor={"option" + x.optionId}
                        onClick={(e) => chooseOptionHandler(x.optionId)}
                      >
                        {x.optionText}
                      </label>
                    </div>
                  ))}
                </div>
                <div className="row justify-content-between">
                  <div className="col-6">
                    <button
                      type="button"
                      className="btn btn-dark chooser-button"
                      onClick={prevQuestionHandler}
                      disabled={chooserState.currentIndex === 0}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-caret-left-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                      </svg>
                      Назад
                    </button>
                  </div>
                  <div className="col-6 text-end">
                    {chooserState.currentIndex === questions.length - 1 ? (
                      <button
                        type="button"
                        className="btn btn-dark chooser-button"
                        onClick={chooseWinner}
                      >
                        Завершити
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="btn btn-dark chooser-button"
                        onClick={nextQuestionHandler}
                      >
                        Далі
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-caret-right-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>,
        portalElement
      )}
    </>
  );
};

export default CameraChooser;
