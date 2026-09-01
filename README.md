# M293_Robin_K-pfli_INFA1a

## KI Nutzung

Ich habe bei dem HTML-code bei dem kontakt.html Ki benutzt um meinen Code zu korrigieren (bei den Eingabefeldern, Optionsfeldern und bei dem Absendeknopf)
vorheriger Code:

<ul>
<li>
<label for="contact">Dein Name</label>
<textarea id="contact" name="name" rows="1" cols="50"></textarea>
</li>
<li>
<label for="contact">E-Mail</label>
<textarea id="contact" name="e-mail" rows="1" cols="50"></textarea>
</li>
<li>
<label for="contact">Nachricht</label>
<textarea id="contact" name="message" rows="5" cols="50"></textarea>
</li>
<li>
<form>
<label>
<input type="radio" name="preis" value="fair" checked> super fair
</label>

              <label>
                <input type="radio" name="preis" value="okay"> okay
              </label>

              <label>
                <input type="radio" name="preis" value="teuer"> teuer
              </label>
            </form>

          </li>
           <input type="submit" value="Absenden">
        </ul>

Die Korrektur mithilfe der KI:

<form action="#" method="post">

  <ul>
    <li>
      <label for="form-name">Dein Name</label>
      <input type="text" id="form-name" name="name" required>
    </li>
    <li>
      <label for="form-email">E-Mail</label>
      <input type="email" id="form-email" name="e-mail" required>
    </li>
    <li>
      <label for="form-message">Nachricht</label>
      <textarea id="form-message" name="message" rows="5" cols="50" required></textarea>
    </li>
    <li>
        <p>Wie findest du den Preis?</p>
        <label>
          <input type="radio" name="preis" value="fair" checked> super fair
        </label>
        <label>
          <input type="radio" name="preis" value="okay"> okay
        </label>
        <label>
          <input type="radio" name="preis" value="teuer"> teuer
        </label>
    </li>
    <li>
      <button type="submit">Absenden</button>
    </li>
  </ul>
</form>

Ich habe auch KI bei dem Styling von der Kontaktseite benutzt
