module Main exposing (..)

import Browser
import Html exposing (..)
import Html.Attributes exposing (class)

main : Program () Model Msg
main = Browser.element
    { init = init
    , update = update
    , subscriptions = subscriptions
    , view = view
    }


-- MODEL ----------------------------------------------------------------------


type alias Model = String


init : () -> (Model, Cmd Msg)
init _ =
    ( "Hello World"
    , Cmd.none
    )


-- UPDATE ---------------------------------------------------------------------


type Msg
    = NoOp


update : Msg -> Model -> (Model, Cmd Msg)
update msg model =
    case msg of
        NoOp ->
            ( model, Cmd.none )


-- SUBSCRIPTIONS --------------------------------------------------------------


subscriptions : Model -> Sub Msg
subscriptions _ = Sub.none


-- VIEW -----------------------------------------------------------------------


view : Model -> Html Msg
view model =
    div
        [ class "flex items-center justify-center h-screen bg-gray-600" ]
        [ div
            [ class "g-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10 whitespace-nowrap" ]
            [ text model ]
        ]
