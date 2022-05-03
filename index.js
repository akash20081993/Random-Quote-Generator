document.querySelector("button").addEventListener("click", function()
{
  var randomNumber = Math.round(Math.random()*8);
  switch (randomNumber)
  {
    case 1:
      document.querySelector("h2").innerHTML = "And, when you want something, all the universe conspires in helping you to achieve it.";
      document.querySelector("h3").innerHTML = "The Alchemist.";
      break;
      case 2:
        document.querySelector("h2").innerHTML = "When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one which has been opened for us.";
        document.querySelector("h3").innerHTML = "-Helen Keller.";
        break;
        case 3:
          document.querySelector("h2").innerHTML = "If you hear a voice within you say 'you cannot paint,' then by all means paint and that voice will be silenced.";
          document.querySelector("h3").innerHTML = "-Vincent Van Gogh.";
          break;
          case 4:
            document.querySelector("h2").innerHTML = "Impossible is just an opinion.";
            document.querySelector("h3").innerHTML = "-Paulo Coelho.";
            break;
            case 5:
              document.querySelector("h2").innerHTML = "The secret of getting ahead is getting started.";
              document.querySelector("h3").innerHTML = "-Mark Twain.";
              break;
              case 6:
                document.querySelector("h2").innerHTML = "All our dreams can come true if we have the courage to pursue them.";
                document.querySelector("h3").innerHTML = "-Walt Disney.";
                break;
                case 7:
                  document.querySelector("h2").innerHTML = "I always wanted to be somebody, but now I realize I should have been more specific.";
                  document.querySelector("h3").innerHTML = "-Lily Tomlin.";
                  break;
                  case 8:
                    document.querySelector("h2").innerHTML = "If you let your head get too big, it'll break your neck.";
                    document.querySelector("h3").innerHTML = "-Elvis Presley.";
                    break;
    default:

  }
}
);
